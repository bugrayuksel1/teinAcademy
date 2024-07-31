import React from "react";
import styles from "./infoCard.module.css";
import Image from "next/image";

function InfoCard({ icon, title, info }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.icon}>
          <Image src={icon} alt="cardIcon" />
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
