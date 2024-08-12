"use client";
import React, { useContext, useState } from "react";
import CommonForm from "../dynamicForm/CommonForm";
import { RegisterFormElements } from "./RegisterFormElements";
import { AuthContext } from "./Context";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {
    registerFormData,
    setRegisterFormData,
    createUserDataInFirebase,
  }: any = useContext(AuthContext);

  const handleRegisterFormSubmit = (e: any) => {
    e.preventDefault();
    createUserDataInFirebase()
      .then((result: any) => {
        if (result.user) {
          updateProfile(result.user, {
            displayName: registerFormData.name,
          });
        }
      })
      .catch((error: any) => console.log(error));
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
