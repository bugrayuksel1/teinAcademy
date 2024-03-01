import React, { useEffect, useState } from "react";
import styles from "./administration.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUsersData } from "../../redux/usersSlice";

function Administration() {
  const dispatch = useDispatch();
  const { usersData } = useSelector((state) => state.users);

  const getUsersData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(setUsersData(response.data));
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className={styles.container}>
      {usersData.map((donenData) => {
        return (
          <div className={styles.userBox}>
            <h1>{donenData.name}</h1>
            <h2>{donenData.phone}</h2>
            <h3>{donenData.email}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Administration;
