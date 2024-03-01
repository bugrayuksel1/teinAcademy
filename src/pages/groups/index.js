import React from "react";
import styles from "./grups.module.css";
import { useParams } from "react-router-dom";

function Groups() {
  const params = useParams();
  return (
    <div className={styles.container}>
      {params.id} id numaralı grup
      <br />
      grubun adı {params.title}
    </div>
  );
}

export default Groups;
