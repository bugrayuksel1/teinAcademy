import React from "react";
import styles from "./managerMenuList.module.css";
import { Link } from "react-router-dom";

function ManagerMenuList() {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/manager/usercontrol">
          <span>User Control</span>
        </Link>
      </div>
    </div>
  );
}

export default ManagerMenuList;
