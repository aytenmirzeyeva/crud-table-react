import React from "react";

const Button = ({ btnText, onClick, disabled }) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>
      {btnText}
    </button>
  );
};

export default Button;
