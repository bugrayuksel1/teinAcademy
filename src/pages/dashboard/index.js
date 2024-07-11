import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import User from "./components/user";
import Public from "./components/public";

function Dashboard() {
  const { isLoggedIn } = useSelector((state) => state.user.userInfo);

  return (
    <div className={styles.container}>{isLoggedIn ? <User /> : <Public />}</div>
  );
}

export default Dashboard;
