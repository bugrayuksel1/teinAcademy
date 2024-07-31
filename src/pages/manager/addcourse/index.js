import React, { useState } from "react";
import styles from "./addCourse.module.css";
import AtomInput from "../../../components/atomics/atomInput";
import axios from "axios";
import PrivateLayout from "@/layouts/privateLayout";
import AdminLayout from "@/layouts/adminLayout";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [responseStatus, setResponseStatus] = useState("");

  const handeAddCurse = async () => {
    const response = await axios.post("http://localhost/addcourse", {
      title,
      description,
      author,
      category: Number(category),
      price: Number(price),
      tags,
    });
    console.log(response);
    setResponseStatus(response?.data?.status);
  };
  console.log("responseStatus: ", responseStatus);
  return (
    <PrivateLayout>
      <AdminLayout>
        <div className={styles.container}>
          {responseStatus === "error" && <h1>Bir hata oluştu.</h1>}
          {responseStatus === "success" && <h1>Tebrikler kursunuz eklendi.</h1>}
          {!responseStatus && (
            <div className={styles.formContainer}>
              <AtomInput
                title="Title"
                name="title"
                type="text"
                placeHolder="Please Input Course Title..."
                onChange={setTitle}
                className={styles.inputStyle}
                value={title}
              />
              <AtomInput
                title="Description"
                name="description"
                type="text"
                placeHolder="Please Input Course Description..."
                onChange={setDescription}
                className={styles.inputStyle}
                value={description}
              />
              <AtomInput
                title="Author"
                name="author"
                type="text"
                placeHolder="Please Input Course Author..."
                onChange={setAuthor}
                className={styles.inputStyle}
                value={author}
              />
              <AtomInput
                title="Category"
                name="category"
                type="number"
                placeHolder="Please Input Course Category..."
                onChange={setCategory}
                className={styles.inputStyle}
                value={category}
              />
              <AtomInput
                title="Price"
                name="price"
                type="number"
                placeHolder="Please Input Course Price..."
                onChange={setPrice}
                className={styles.inputStyle}
                value={price}
              />
              <AtomInput
                title="Tags"
                name="tags"
                type="text"
                placeHolder="Please Input Course Tags..."
                onChange={setTags}
                className={styles.inputStyle}
                value={tags}
              />
              <button className={styles.submitButton} onClick={handeAddCurse}>
                Add Course
              </button>
            </div>
          )}
        </div>
      </AdminLayout>
    </PrivateLayout>
  );
}
export default AddCourse;
