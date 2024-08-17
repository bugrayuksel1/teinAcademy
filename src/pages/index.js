import styles from "./home.module.css";
import { useSelector } from "react-redux";
import HomePrivate from "../components/ui/homePrivate";
import HomePublic from "../components/ui/homePublic";
import MainLayout from "@/layouts/mainLayout";
import { useState, useEffect } from "react";

function Dashboard({}) {
  const { isLoggedIn } = useSelector((state) => state.user.userInfo);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(isLoggedIn);
  }, []);

  return (
    <MainLayout>
      <div className={styles.container}>
        {isLogin ? <HomePrivate /> : <HomePublic />}
      </div>
    </MainLayout>
  );
}

export default Dashboard;
