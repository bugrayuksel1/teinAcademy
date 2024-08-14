import styles from "./home.module.css";
import { useSelector } from "react-redux";
import HomePrivate from "../components/ui/homePrivate";
import HomePublic from "../components/ui/homePublic";
import MainLayout from "@/layouts/mainLayout";

function Dashboard({ kukiToken }) {
  const { isLoggedIn } = useSelector((state) => state.user.userInfo);
  console.log(kukiToken, "sss");

  return (
    <MainLayout kukiToken={kukiToken}>
      <div className={styles.container}>
        {isLoggedIn || kukiToken ? <HomePrivate /> : <HomePublic />}
      </div>
    </MainLayout>
  );
}

export default Dashboard;
export const getServerSideProps = (context) => {
  const { req } = context;
  const cookies = req.headers.cookie;

  return {
    props: { kukiToken: cookies?.split("=")?.[1] },
  };
};
