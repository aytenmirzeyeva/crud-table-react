import React from "react";

const label = ({ whatFor, labelText }) => {
  return <label htmlFor={whatFor}>{labelText}</label>;
};

export default label;
