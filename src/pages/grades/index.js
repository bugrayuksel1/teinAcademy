import React from "react";
import styles from "./grades.module.css";
import Link from "next/link";
import MainLayout from "@/layouts/mainLayout";
import axios from "axios";

function Grades({ postData }) {
  return (
    <MainLayout>
      <div className={styles.container}>
        {postData?.map((post) => {
          return (
            <div className={styles.listItem}>
              <Link href={`./postdetail/${post.id}`}>
                <span className={styles.listSpan}>{post.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Grades;

export const getServerSideProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return {
    props: { postData: response?.data },
  };
};
