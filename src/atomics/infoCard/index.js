import React from "react";
import styles from "./infoCard.module.css";

function InfoCard({ icon, title, info }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.icon}>
          <img src={icon} alt="cardIcon" />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.bottom}>
        <span>{info}</span>
      </div>
    </div>
  );
}

export default InfoCard;
