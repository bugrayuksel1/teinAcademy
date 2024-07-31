import React from "react";
import styles from "./atomButton.module.css";

function AtomButton({ onClick, text, className }) {
  console.log(className, "sdad");
  return (
    <button onClick={onClick} className={`${styles.button} ${className} `}>
      {text}
    </button>
  );
}

export default AtomButton;
