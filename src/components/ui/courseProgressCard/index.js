import React from "react";
import styles from "./courseProgressCard.module.css";
import assets from "@/assets";
import Image from "next/image";

function CourseProgressCard({
  title,
  colorBackground,
  color1,
  color2,
  name,
  colorPercent,
}) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: colorBackground }}
    >
      <div className={styles.cardTitle}>
        <Image alt="cardTitle" src={assets.icons.courseCardProfileIcon} />
      </div>
      <div className={styles.cardInfo}>
        <span>{title}</span>
        <div className={styles.profileInfo}>
          <Image alt="cardTitle" src={assets.icons.courseCardTitleIcon} />
          <span>{name}</span>
        </div>
      </div>
      <div className={styles.cardGraphic}>
        <div
          style={{
            background: `conic-gradient(${color1} 0% ${colorPercent}%, ${color2} ${colorPercent}% 100% )`,
            width: "150px",
            height: "150px",
            borderRadius: "75px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default CourseProgressCard;
