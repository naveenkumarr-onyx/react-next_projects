import React from "react";
import Jwt from "./Jwt";
import { ToastContainer } from "react-toastify";
import Login from "../components/firebaseComponent/Login";

const Page = () => {
  return (
    <div>
      <Jwt />
      <ToastContainer /> {/* Include this to display notifications */}
    </div>
  );
};

export default Page;
