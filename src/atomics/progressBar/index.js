import React from "react";
import styles from "./progressBar.module.css";

function ProgressBar({ complete }) {
  return (
    <div className={styles.container}>
      <div className={styles.progress} style={{ width: `${complete}%` }}></div>
    </div>
  );
}

export default ProgressBar;
