import React from "react";
import styles from "./staticsProgressBar.module.css";

function StaticsProgressBar({ progress = "0" }) {
  return (
    <div className={styles.container}>
      <div className={styles.progress} style={{ height: `${progress}%` }}></div>
    </div>
  );
}

export default StaticsProgressBar;
