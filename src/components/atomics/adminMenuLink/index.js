import React from "react";
import Link from "next/link";
import styles from "./adminMenuLink.module.css";

function AdminMenuLink({ path, text }) {
  return (
    <Link href={path}>
      <span className={styles.link}>{text}</span>
    </Link>
  );
}

export default AdminMenuLink;
