"use client";
import { useState } from "react";
import CommonForm from "./CommonForm";
import { loginFormElements } from "./loginFormElements";

function CommonFormComponent() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function onHandleSubmit(event: any) {
    event.preventDefault();
    setLoginFormData({
      email: "",
      password: "",
    });
    console.log(loginFormData);
  }

  return (
    <div>
      <h1>Login page/component</h1>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

export default CommonFormComponent;
