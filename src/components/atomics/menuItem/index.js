import React from "react";
import styles from "./menuItem.module.css";
import Link from "next/link";
import Image from "next/image";

function MenuItem({ path, icon, text }) {
  return (
    <Link href={path}>
      <div className={styles.mainMenuItem}>
        <Image alt={text} src={icon} />
        <span>{text}</span>
      </div>
    </Link>
  );
}

export default MenuItem;
