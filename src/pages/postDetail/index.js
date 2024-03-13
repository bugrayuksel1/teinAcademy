import React, { useEffect } from "react";
import styles from "./postDetail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanUp, getDetail, getDetailComments } from "../../redux/gradesSlice";
import assets from "../../assets";

function PostDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const {
    detailData,
    detailDataLoading,
    detailDataError,
    commentData,
    commentDataLoading,
    commentDataError,
  } = useSelector((state) => state.grades);

  useEffect(() => {
    dispatch(getDetail({ id: params.id }));
    dispatch(getDetailComments({ id: params.id }));
    dispatch(cleanUp());
  }, [dispatch, params.id]);

  return (
    <div className={styles.container}>
      {detailDataLoading && <img alt="loading" src={assets.gifs.loadingGif} />}
      {detailDataError && (
        <div>
          <h2 style={{ color: "red" }}>{detailDataError}</h2>
        </div>
      )}
      <div className={styles.detailInfo}>
        <h1>{detailData.title}</h1>
        <h3>{detailData.body}</h3>
      </div>
      <div className={styles.commentInfo}>
        {commentDataLoading && (
          <img alt="loading" src={assets.gifs.loadingGif} />
        )}
        {commentDataError && (
          <div>
            <h2 style={{ color: "red" }}>{commentDataError}</h2>
          </div>
        )}
        {commentData.map((comment) => {
          return (
            <div className={styles.commentListItem}>
              <div>
                <div>Name: {comment.name}</div>
                <div>Email: {comment.email}</div>
              </div>
              <div>Comment: {comment.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostDetail;
