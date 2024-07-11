import React, { useEffect, useState } from "react";
import styles from "./user.module.css";
import InfoCard from "../../../../atomics/infoCard";
import assets from "../../../../assets";
import ProgressBar from "../../../../atomics/progressBar";
import StaticsProgressBar from "../../../../atomics/staticsProgressBar";
function User() {
  const data = [
    {
      title: "Courses in Progress",
      icon: assets.icons.inprogressIcon,
      info: "3",
    },
    {
      title: "Active Prototypes",
      icon: assets.icons.cardActiveIcon,
      info: "7",
    },
    {
      title: "Hours Learning",
      icon: assets.icons.hoursIcon,
      info: "3h 15m",
    },
    {
      title: "Community Score",
      icon: assets.icons.scoreIcon,
      info: "240",
    },
  ];

  const statisticData1 = [
    {
      day: "SAT",
    },
    {
      day: "SUN",
    },
    {
      day: "MON",
    },
    {
      day: "TUE",
    },
    {
      day: "WED",
    },
    {
      day: "THU",
    },
    {
      day: "FRI",
    },
  ];
  const statisticData2 = [
    {
      day: "SAT",
      statistic: "15",
    },
    {
      day: "SUN",
      statistic: "70",
    },
    {
      day: "MON",
      statistic: "45",
    },
    {
      day: "TUE",
      statistic: "50",
    },
    {
      day: "WED",
      statistic: "95",
    },
    {
      day: "THU",
      statistic: "60",
    },
    {
      day: "FRI",
      statistic: "65",
    },
  ];
  const [statisticData, setStatisticData] = useState(statisticData1);
  useEffect(() => {
    setStatisticData(statisticData2);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {data.map((item) => {
          return (
            <InfoCard title={item.title} icon={item.icon} info={item.info} />
          );
        })}
      </div>
      <div className={styles.statistic}>
        <div className={styles.study}>
          <div className={styles.studyTop}>
            <span>Study Statistics</span>
            <span>Week</span>
          </div>
          <div className={styles.studyProgress}>
            {statisticData.map((item) => {
              return <StaticsProgressBar progress={item?.statistic} />;
            })}
          </div>
          <div className={styles.studyBottom}>
            {statisticData.map((item) => {
              return <span>{item.day}</span>;
            })}
          </div>
        </div>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
}

export default User;
