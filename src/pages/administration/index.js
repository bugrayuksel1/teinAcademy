import React from "react";
import styles from "./administration.module.css";
import { useSelector } from "react-redux";

function Administration() {
  const { projectName, countValue } = useSelector((state) => state.global);
  console.log("burası administiration");
  return (
    <div className={styles.container}>
      {projectName} - {countValue}
      <br />
      <br />
    </div>
  );
}

export default Administration;
