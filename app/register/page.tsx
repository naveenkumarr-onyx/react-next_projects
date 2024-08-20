"use client";
import React, { useContext } from "react";
import Register from "../components/firebaseComponent/Register";
import { AuthContext } from "../components/firebaseComponent/Context";
import { useRouter } from "next/navigation";

const Page = () => {
  const { users }: any = useContext(AuthContext);
  const router = useRouter();
  if (users) return router.push("/profile");
  return (
    <div>
      <Register />
    </div>
  );
};

export default Page;
