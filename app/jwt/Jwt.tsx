"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Jwt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
      if (response.status === 201) {
        alert("User created successfully");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        alert("User already exists");
      } else {
        console.error("Error in API call", error.message);
      }
    }
  };

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
        <button type="submit" className=" bg-blue-600 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Jwt;
