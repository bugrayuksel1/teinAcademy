import React from "react";
import { Link } from "react-router-dom";
import styles from "./adminMenuLink.module.css";

function AdminMenuLink({ path, text }) {
  return (
    <Link to={path}>
      <span className={styles.link}>{text}</span>
    </Link>
  );
}

export default AdminMenuLink;
