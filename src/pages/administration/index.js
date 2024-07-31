import React, { useEffect } from "react";
import styles from "./administration.module.css";
import { useDispatch, useSelector } from "react-redux";
import assets from "../../assets";
import { getUsersData, filterUsersData, cleanUp } from "../../redux/usersSlice";
import Image from "next/image";
import MainLayout from "@/layouts/mainLayout";

function Administration() {
  const dispatch = useDispatch();
  const { usersData, loading, errorMessage } = useSelector(
    (state) => state.users
  );

  const filterData = (param) => {
    dispatch(filterUsersData(param));
  };

  useEffect(() => {
    dispatch(getUsersData());
    return () => {
      dispatch(cleanUp());
    };
  }, []);

  return (
    <MainLayout>
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
        {loading && <Image alt="loading gif" src={assets.gifs.loadingGif} />}
        {errorMessage && (
          <div>
            <h2 style={{ color: "red" }}>{errorMessage}</h2>
          </div>
        )}
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
    </MainLayout>
  );
}

export default Administration;
