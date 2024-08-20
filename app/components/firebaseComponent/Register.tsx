"use client";
import React, { useContext, useState } from "react";
import CommonForm from "../dynamicForm/CommonForm";
import { RegisterFormElements } from "./RegisterFormElements";
import { AuthContext } from "./Context";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import auth from "../firebase/firebaseConfig";

const Register = () => {
  const {
    registerFormData,
    setRegisterFormData,
    createUserDataInFirebase,
    setLoading,
  }: any = useContext(AuthContext);
  const router = useRouter();

  const handleRegisterFormSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await createUserDataInFirebase();
      const user = result.user;
      updateProfile(user, {
        displayName: registerFormData.name,
      });
      auth.currentUser?.reload();
      if (auth.currentUser?.displayName) {
        setLoading(false);
        router.push("/profile");
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
    setRegisterFormData({
      email: "",
      password: "",
      name: "",
    });
  };

  return (
    <div className=" w-full max-w-sm mx-auto rounded-lg shadow-sm">
      <div className="px-6 py-5">
        <CommonForm
          formData={registerFormData}
          setFormData={setRegisterFormData}
          formControls={RegisterFormElements}
          buttonText={"Register"}
          onHandleSubmit={handleRegisterFormSubmit}
        />
      </div>
    </div>
  );
};

export default Register;
