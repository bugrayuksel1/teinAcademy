import styles from "./dashboard.module.css";
import Info from "./components/info";
import { useEffect, useState } from "react";
import sha256 from "sha256";
import axios from "axios";

function Dashboard() {
  const [isTitleActive, setIsTitleActive] = useState(true);

  useEffect(() => {
    axios.post("http://localhost/hmac", {
      param1: "test1",
      param2: "test2",
      param3: "test3",
    });
  }, []);

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
