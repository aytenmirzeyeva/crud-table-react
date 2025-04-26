import React from "react";

const Label = ({ whatFor, labelText }) => {
  return <label htmlFor={whatFor}>{labelText}</label>;
};

export default Label;

