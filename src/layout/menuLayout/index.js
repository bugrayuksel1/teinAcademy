import React from "react";
import styles from "./menuLayout.module.css";
import assets from "../../assets";
import { Link } from "react-router-dom";

function MenuLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.logoLayer}>
        <img alt="dfı" src={assets.logos.logo} />
      </div>
      <div className={styles.mainMenu}>
        <Link to="/">
          <div className={styles.mainMenuItem}>
            <img alt="" src={assets.icons.menuIcon1} />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/grades">
          <div className={styles.mainMenuItem}>
            <img alt="" src={assets.icons.menuIcon2} />
            <span>Grades</span>
          </div>
        </Link>
        <Link to="/class">
          <div className={styles.mainMenuItem}>
            <img alt="" src={assets.icons.menuIcon3} />
            <span>Class</span>
          </div>
        </Link>
        <Link to="/groups">
          <div className={styles.mainMenuItem}>
            <img alt="" src={assets.icons.menuIcon4} />
            <span>Groups</span>
          </div>
        </Link>
        <Link to="/administration">
          <div className={styles.mainMenuItem}>
            <img alt="" src={assets.icons.menuIcon5} />
            <span>Administration</span>
          </div>
        </Link>
        <Link to="/departments">
          <div className={styles.mainMenuItem}>
            <img alt="" src={assets.icons.menuIcon6} />
            <span>Departements</span>
          </div>
        </Link>
      </div>
      <div className={styles.teamsMenu}>
        <div className={styles.teamsMenuTitle}>
          <span>TEAMS</span>
        </div>
        <div className={styles.teamsMenuItem}>
          <img alt="" src={assets.icons.menuIcon7} />
          <span>Message</span>
        </div>
        <div className={styles.teamsMenuItem}>
          <img alt="" src={assets.icons.menuIcon8} />
          <span>Call Meeting</span>
        </div>
      </div>
    </div>
  );
}

export default MenuLayout;
