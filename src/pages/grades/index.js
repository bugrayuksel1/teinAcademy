import React, { useEffect, useState } from "react";
import styles from "./grades.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Grades() {
  const [postData, setPostData] = useState([]);

  const getPostsList = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPostData(response.data);
  };

  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <div className={styles.container}>
      {postData.map((post) => {
        return (
          <div className={styles.listItem}>
            <Link to={`./postdetail/${post.id}`}>
              <span className={styles.listSpan}>{post.title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Grades;
