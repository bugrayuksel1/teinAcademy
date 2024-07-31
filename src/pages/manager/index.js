import React from "react";
import styles from "./manager.module.css";
import AdminLayout from "@/layouts/adminLayout";
import PrivateLayout from "@/layouts/privateLayout";

function Manager() {
  return (
    <PrivateLayout>
      <AdminLayout>
        <div className={styles.container}>Manager</div>
      </AdminLayout>
    </PrivateLayout>
  );
}

export default Manager;
