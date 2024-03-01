import React from "react";
import styles from "./menuItem.module.css";
import { Link } from "react-router-dom";

function MenuItem({ path, icon, text }) {
  return (
    <Link to={path}>
      <div className={styles.mainMenuItem}>
        <img alt={text} src={icon} />
        <span>{text}</span>
      </div>
    </Link>
  );
}

export default MenuItem;
