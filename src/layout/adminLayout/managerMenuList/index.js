import React from "react";
import styles from "./managerMenuList.module.css";
import AdminMenuLink from "./components/adminMenuLink";
import { menuData } from "./consts";
import { useSelector } from "react-redux";

function ManagerMenuList() {
  const { role } = useSelector((state) => state.user.userInfo);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {menuData.map((item) => {
          if (item.role.includes(role)) {
            return <AdminMenuLink path={item.path} text={item.text} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ManagerMenuList;
