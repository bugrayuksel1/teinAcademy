import React from "react";
import styles from "./atomInput.module.css";

function AtomInput({
  title,
  name,
  type,
  placeHolder,
  onChange,
  className,
  value,
  disabled,
}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <label htmlFor={name}>{title}</label>
      <input
        onChange={(e) => onChange(e.target.value)}
        id={name}
        type={type}
        placeholder={placeHolder}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

export default AtomInput;
