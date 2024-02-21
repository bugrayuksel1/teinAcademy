import React from "react";
import styles from "./deparments.module.css";
import { Link } from "react-router-dom";

function Departments() {
  return (
    <div className={styles.container}>
      Departments<Link to={"/"}>Ana sayfaya dön</Link>
    </div>
  );
}

export default Departments;
