import React from "react";
import { Link } from "react-router-dom";
import styles from "./adminMenuLink.module.css";

function AdminMenuLink({ path, text }) {
  return (
    <Link to={path}>
      <span>{text}</span>
    </Link>
  );
}

export default AdminMenuLink;
