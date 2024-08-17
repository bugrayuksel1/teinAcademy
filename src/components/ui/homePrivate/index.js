import React, { useEffect, useRef, useState } from "react";
import styles from "./homePrivate.module.css";
import InfoCard from "../../atomics/infoCard";
import assets from "../../../assets";
import ProgressBar from "../../atomics/progressBar";
import StaticsProgressBar from "../../atomics/staticsProgressBar";
import CourseProgressCard from "../courseProgressCard";
import axios from "axios";
import { useSelector } from "react-redux";

function HomePrivate() {
  const testref = useRef(null);
  const test3ref = useRef(null);
  const [graphicCardData, setGraphiccardData] = useState([]);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    const getGraphicData = async () => {
      const response = await axios.post("http://localhost/coursestatistics", {
        userName: userInfo.user_name,
      });
      setGraphiccardData(response?.data);
    };
    getGraphicData();
  }, []);

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
      mon: "0",
      tue: "0",
      wed: "0",
      thu: "0",
      fri: "0",
      sat: "0",
      sun: "0",
    },
  ];

  const circleProgressBarData = {
    test: 40,
    test3: 60,
  };
  const [circleProgressBar, setCircleProgressBar] = useState({
    test: 0,
    test3: 0,
  });

  const [statisticData, setStatisticData] = useState(statisticData1);
  useEffect(() => {
    const getStatisticData = async () => {
      const response = await axios.post("http://localhost/weeklyuserdata", {
        userName: userInfo.user_name,
      });
      setStatisticData(response?.data);
      console.log(response, "respp");
    };
    getStatisticData();

    let i = 0;
    let x = 0;
    const animation = setInterval(() => {
      i = i + 1;
      x = x + 1;
      if (circleProgressBarData.test > i) {
        testref.current.style.background = `conic-gradient(black 0% ${i}%, blue ${i}% 100%)`;
      }

      if (circleProgressBarData.test3 > x) {
        test3ref.current.style.background = `conic-gradient(red 0% ${x}%, green ${x}% 100%)`;
      }
    }, 10);
    return () => {
      clearInterval(animation);
    };
  }, []);

  const colorData = [
    {
      colorBackground: "#9747FF40",
      color1: "gray",
      color2: "yellow",
    },
    {
      colorBackground: "#2F80ED40",
      color1: "red",
      color2: "yellow",
    },
    {
      colorBackground: "#56CCF240",
      color1: "pink",
      color2: "blue",
    },
  ];

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
            {Object?.entries(statisticData[0]).map((item) => {
              return <StaticsProgressBar progress={item[1]} />;
            })}
          </div>
          <div className={styles.studyBottom}>
            {Object?.entries(statisticData[0]).map((item) => {
              return <span>{item[0]}</span>;
            })}
          </div>
        </div>
        <div className={styles.progress}>
          <div
            className={styles.test}
            ref={testref}
            style={{
              background: `conic-gradient(black 0% ${circleProgressBar.test}%, blue ${circleProgressBar.test}% 100%)`,
            }}
          >
            <div className={styles.test2}>
              <div
                ref={test3ref}
                className={styles.test3}
                style={{
                  background: `conic-gradient(red 0% ${circleProgressBar.test3}%, green ${circleProgressBar.test3}% 100%)`,
                }}
              >
                <div className={styles.test4}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <ProgressBar />
      </div> */}
      <div className={styles.graphicContainer}>
        {graphicCardData.map((item, i) => {
          return (
            <CourseProgressCard
              title={item.user_name}
              colorBackground={colorData[i].colorBackground}
              color1={colorData[i].color1}
              color2={colorData[i].color2}
              name={item.user_name}
              colorPercent={item.course_percent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePrivate;
