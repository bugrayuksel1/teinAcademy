import styles from "./home.module.css";
import { useSelector } from "react-redux";
import HomePrivate from "../components/ui/homePrivate";
import HomePublic from "../components/ui/homePublic";
import MainLayout from "@/layouts/mainLayout";

function Dashboard() {
  const { isLoggedIn } = useSelector((state) => state.user.userInfo);

  return (
    <MainLayout>
      <div className={styles.container}>
        {isLoggedIn ? <HomePrivate /> : <HomePublic />}
      </div>
    </MainLayout>
  );
}

export default Dashboard;
