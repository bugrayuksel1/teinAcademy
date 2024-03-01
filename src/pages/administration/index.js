import React, { useEffect, useState } from "react";
import styles from "./administration.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUsersData, filterUsersData } from "../../redux/usersSlice";

function Administration() {
  const dispatch = useDispatch();
  const { usersData } = useSelector((state) => state.users);

  const getUsersData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(setUsersData(response.data));
  };

  const filterData = (param) => {
    dispatch(filterUsersData(param));
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inputLabel}>
        <span className={styles.filterText}>Filtreleme: </span>
        <input
          className={styles.inputElement}
          placeholder="Input filter keys"
          type="text"
          onChange={(e) => filterData(e.target.value)}
        />
      </div>
      {usersData.map((donenData) => {
        return (
          <div className={styles.userBox}>
            <h1>{donenData.name}</h1>
            <h2>{donenData.phone}</h2>
            <h3>{donenData.email}</h3>
          </div>
        );
      })}
      {usersData.length === 0 && (
        <div>
          <h1>Kriterlere uygun data bulunamadı.</h1>
        </div>
      )}
    </div>
  );
}

export default Administration;
