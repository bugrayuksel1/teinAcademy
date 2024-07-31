import React, { useEffect } from "react";
import styles from "./grades.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { cleanUp, getPosts } from "../../redux/gradesSlice";
import assets from "../../assets";
import Image from "next/image";
import MainLayout from "@/layouts/mainLayout";

function Grades() {
  const dispatch = useDispatch();
  const { postData, postDataLoading, postDataError } = useSelector(
    (state) => state.grades
  );

  useEffect(() => {
    dispatch(getPosts());
    return () => {
      dispatch(cleanUp());
    };
  }, []);

  return (
    <MainLayout>
      <div className={styles.container}>
        {postDataLoading && (
          <Image alt="loading" src={assets.gifs.loadingGif} />
        )}
        {postDataError && (
          <div>
            <h2 style={{ color: "red" }}>{postDataError}</h2>
          </div>
        )}
        {postData.map((post) => {
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
