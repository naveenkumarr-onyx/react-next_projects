"use client";
import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const Jwt = () => {
  return (
    <div className=" flex ">
      <SignUp />
      <Login />
    </div>
  );
};

export default Jwt;
