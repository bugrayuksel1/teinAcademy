import React, { useEffect, useState } from "react";
import styles from "./grades.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanUp, getPosts } from "../../redux/gradesSlice";
import assets from "../../assets";

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
    <div className={styles.container}>
      {postDataLoading && <img alt="loading" src={assets.gifs.loadingGif} />}
      {postDataError && (
        <div>
          <h2 style={{ color: "red" }}>{postDataError}</h2>
        </div>
      )}
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
