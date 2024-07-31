import React from "react";
import styles from "./departments.module.css";
import Link from "next/link";
import MainLayout from "@/layouts/mainLayout";
function Departments() {
  return (
    <MainLayout>
      <div className={styles.container}>
        Departments<Link href={"/"}>Ana sayfaya dön</Link>
      </div>
    </MainLayout>
  );
}

export default Departments;
