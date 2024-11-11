"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
