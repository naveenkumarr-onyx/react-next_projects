"use client";
import React, { useContext } from "react";
import CommonForm from "../dynamicForm/CommonForm";
import { AuthContext } from "./Context";
import { loginFormElements } from "./LoginFormElements";
import { useRouter } from "next/navigation";

const Login = () => {
  const {
    loginFormData,
    setloginFormData,
    loginUserDataInFirebase,
    users,
  }: any = useContext(AuthContext);
  const router = useRouter();

  const handleRegisterFormSubmit = (e: any) => {
    e.preventDefault();
    loginUserDataInFirebase();
    setloginFormData({
      email: "",
      password: "",
    });
  };
  if (users) return router.push("/profile");

  return (
    <div className=" w-full max-w-sm mx-auto rounded-lg shadow-sm">
      <div className="px-6 py-5">
        <CommonForm
          formData={loginFormData}
          setFormData={setloginFormData}
          formControls={loginFormElements}
          buttonText={"Login"}
          onHandleSubmit={handleRegisterFormSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
