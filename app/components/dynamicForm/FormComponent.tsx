import React from "react";

const FormComponent = ({
  label,
  name,
  type,
  id,
  onChange,
  value,
  placeholder,
  buttonText,
}: any) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-3">
        <label htmlFor={id}>{label}</label>
        <input
          name={name}
          type={type || "text"}
          id={id}
          placeholder={placeholder || "Enter a value"}
          value={value}
          onChange={onChange}
          className=" border border-black"
        />
        <button>{buttonText || ""}</button>
      </div>
    </div>
  );
};

export default FormComponent;
