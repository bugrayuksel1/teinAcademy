import React, { useEffect, useState } from "react";
import styles from "./postDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetail() {
  const params = useParams();
  const [detailData, setDetailData] = useState({});
  const [commentData, setCommentData] = useState([]);

  const getDetailData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    setDetailData(response.data);
  };

  const getDetailComment = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    );
    setCommentData(response.data);
  };

  useEffect(() => {
    getDetailData();
    getDetailComment();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.detailInfo}>
        <h1>{detailData.title}</h1>
        <h3>{detailData.body}</h3>
      </div>
      <div className={styles.commentInfo}>
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
