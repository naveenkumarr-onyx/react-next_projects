"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/signup",
        formData
      );
      console.log(response);
      if (response.status === 201) {
        toast.success("User created successfully");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.info("User already exists");
      } else {
        toast.error("Error in API call", error.message);
      }
    }
  };

  useEffect(() => {
    // Enable the button only if all fields are filled
    if (formData.email && formData.password && formData.name) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]); // Add `formData` as a dependency to watch for changes in form data

  return (
    <div className=" ml-[30px]">
      <h1>Sign Up</h1>
      <form
        action=""
        className=" flex flex-col max-w-[300px] gap-2"
        onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          className=" border-[1px]"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={` ${
            disabled
              ? " cursor-not-allowed bg-gray-500"
              : " cursor-pointer  bg-blue-600 text-white"
          }`}
          disabled={disabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
