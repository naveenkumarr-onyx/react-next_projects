"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData]: any = useState({
    name: "",
    email: "",
  });
  function handleInputChange(event: any) {
    const { name, value }: any = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <input
        name="name"
        id="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        name="email"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Form;
