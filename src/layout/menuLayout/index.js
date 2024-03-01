import React from "react";
import styles from "./menuLayout.module.css";
import assets from "../../assets";
import { Link } from "react-router-dom";
import MenuItem from "./components/menuItem";
import { useDispatch } from "react-redux";
import { changeProjectName } from "../../redux/globalSlice";

function MenuLayout() {
  const dispatch = useDispatch();
  console.log("burası menu layout");
  return (
    <div className={styles.container}>
      <div className={styles.logoLayer}>
        <img alt="dfı" src={assets.logos.logo} />
      </div>
      <div className={styles.mainMenu}>
        <MenuItem path="/" icon={assets.icons.menuIcon1} text="Dashboard" />
        <MenuItem path="/grades" icon={assets.icons.menuIcon2} text="Grades" />
        <MenuItem path="/class" icon={assets.icons.menuIcon3} text="Class" />
        <MenuItem path="/groups" icon={assets.icons.menuIcon4} text="Groups" />
        <MenuItem
          path="/administration"
          icon={assets.icons.menuIcon5}
          text="Administration"
        />
        <MenuItem
          path="/departments"
          icon={assets.icons.menuIcon6}
          text="Departements"
        />
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
