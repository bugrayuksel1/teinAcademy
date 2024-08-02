import React from "react";
import styles from "./postDetail.module.css";
import axios from "axios";

function PostDetail({ detailData, commentData }) {
  return (
    <div className={styles.container}>
      <div className={styles.detailInfo}>
        <h1>{detailData?.title}</h1>
        <h3>{detailData?.body}</h3>
      </div>
      <div className={styles.commentInfo}>
        {commentData?.map((comment) => {
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

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const responseDetail = axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const responseComment = axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  console.log(responseDetail, "detail", responseComment, "comment");

  const [response1, response2] = await Promise.all([
    responseDetail,
    responseComment,
  ]);
  return {
    props: {
      detailData: response1.data,
      commentData: response2.data,
    },
  };
};
