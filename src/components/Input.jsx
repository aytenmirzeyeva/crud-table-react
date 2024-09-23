import React from "react";

const Input = ({ inputId, placeholder, type, name, value, onChange }) => {
  return (
    <input
      className="input"
      id={inputId}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
