import React, { useEffect } from "react";
import styles from "./administration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterUsersData, setUserData } from "../../redux/usersSlice";
import MainLayout from "@/layouts/mainLayout";
import axios from "axios";

function Administration({ userServerData }) {
  const dispatch = useDispatch();
  const { usersData } = useSelector((state) => state.users);
  const filterData = (param) => {
    dispatch(filterUsersData(param));
  };

  useEffect(() => {
    dispatch(setUserData(userServerData));
  }, []);
  if (userServerData && usersData.length > 10) {
  }
  const data = usersData || userServerData;
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

        {data?.map((donenData) => {
          return (
            <div className={styles.userBox}>
              <h1>{donenData.name}</h1>
              <h2>{donenData.phone}</h2>
              <h3>{donenData.email}</h3>
            </div>
          );
        })}
        {data?.length === 0 && (
          <div>
            <h1>Kriterlere uygun data bulunamadı.</h1>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Administration;
export const getServerSideProps = async (context) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return { props: { userServerData: response.data } };
};
