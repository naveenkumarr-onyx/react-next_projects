import React from "react";

const FormComponent = ({
  label,
  name,
  type,
  id,
  onChange,
  value,
  placeholder,
}: any) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        type={type || "text"}
        id={id}
        placeholder={placeholder || "Enter a value"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormComponent;
