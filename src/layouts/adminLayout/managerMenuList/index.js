import React from "react";
import styles from "./managerMenuList.module.css";
import { menuData } from "./consts";
import { useSelector } from "react-redux";
import MenuSection from "../../../components/ui/menuSection";

function ManagerMenuList() {
  const { role } = useSelector((state) => state.user.userInfo);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {menuData.map((section) => {
          return <MenuSection role={role} section={section} />;
        })}
      </div>
    </div>
  );
}

export default ManagerMenuList;
