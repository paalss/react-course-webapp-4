import React from "react";

import classes from "./Input.module.css";

const Input = ({
  isValid,
  id,
  type,
  label,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
