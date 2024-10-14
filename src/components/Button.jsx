import React from "react";

const Button = ({ btnText, onClick, disabled, className }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
