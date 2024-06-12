import React, { useState } from "react";
import styles from "./menuSection.module.css";
import AdminMenuLink from "../adminMenuLink";
import classNames from "classnames";
import assets from "../../../../../assets";

function MenuSection({ section, role }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.menuSection}>
      <div onClick={() => setToggle((prev) => !prev)} className={styles.title}>
        <span>{section.title}</span>
        <img
          className={classNames(styles.dropDownIcon, {
            [styles.dropDownIconClosed]: !toggle,
            [styles.dropDownIconOpened]: toggle,
          })}
          alt="dropdown icon"
          src={assets.icons.dropDownIcon}
        />
      </div>
      <div
        className={classNames(styles.menuLinks, {
          [styles.menuLinksOpened]: toggle,
          [styles.menuLinksClosed]: !toggle,
        })}
      >
        {section.list.map((item) => {
          if (item.role.includes(role)) {
            return <AdminMenuLink path={item.path} text={item.text} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default MenuSection;
