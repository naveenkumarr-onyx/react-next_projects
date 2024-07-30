"use client";
import { useState } from "react";
import CommonForm from "./CommonForm";
import { loginFormElements } from "./loginFormElements";

function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function onHandleSubmit(event: any) {
    event.preventDefault();
    console.log(loginFormData, "loginFormData");
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

export default LoginComponent;
