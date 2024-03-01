import styles from "./dashboard.module.css";
import Info from "./components/info";
import { useState } from "react";

function Dashboard() {
  let [isTitleActive, setIsTitleActive] = useState(true);

  return (
    <div className={styles.container}>
      {isTitleActive && <h1>Tein Academy</h1>}
      <Info />
      <button
        style={{ backgroundColor: isTitleActive ? "blue" : "red" }}
        onClick={() => setIsTitleActive(!isTitleActive)}
      >
        toggle Title Status Change
      </button>
    </div>
  );
}

export default Dashboard;
