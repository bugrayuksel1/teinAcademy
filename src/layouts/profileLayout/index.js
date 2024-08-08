import React, { useState } from "react";
import styles from "./profileLayout.module.css";
import assets from "../../assets";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/userSlice";
import { setError } from "../../redux/errorSlice";
import { toggleRegisterForm } from "../../redux/globalSlice";
import AtomInput from "../../components/atomics/atomInput";
import Image from "next/image";

function ProfileLayout({ kukiToken }) {
  const dispatch = useDispatch();
  const { isLoggedIn, user_name, e_mail, role, full_name } = useSelector(
    (state) => state.user.userInfo
  );
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(kukiToken, "kkk");

  const handleLogin = async () => {
    if (userName === "" || password === "") {
      dispatch(
        setError({
          error: true,
          errorTitle: "Form Input Boş",
          errorMessage: "Kullanıcı adı ya da şifre boş olamaz.",
        })
      );
      return null;
    }
    const result = await axios.post("http://localhost/login", {
      userName,
      password,
    });
    if (result.data.status === "error") {
      alert(result.data.message);
    } else {
      const token = result.data.access_token;
      const userData = result.data.data[0];
      dispatch(login({ token, ...userData, isLoggedIn: true }));
    }
  };

  const handeRegister = async () => {
    dispatch(toggleRegisterForm());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.profile}>
          <Image alt="profil" src={assets.images.user} />
        </div>
        {(!isLoggedIn || !kukiToken) && (
          <>
            <div className={styles.userName}>
              <AtomInput
                title="Login"
                name="loginInput"
                type="text"
                placeHolder="User Name..."
                onChange={setUserName}
              />
            </div>
            <div className={styles.password}>
              <AtomInput
                title="Password"
                name="registerInput"
                type="password"
                placeHolder="Password..."
                onChange={setPassword}
              />
            </div>
            <div className={styles.loginInfo}></div>
            <div className={styles.loginButton}>
              <button onClick={handleLogin}>Login</button>
            </div>
            <div onClick={handeRegister} className={styles.registerButton}>
              <button>Register</button>
            </div>
          </>
        )}
        {(isLoggedIn || kukiToken) && (
          <div className={styles.userInfo}>
            <div className={styles.userInfoLine}>
              <span>
                Name: <b>{full_name ? full_name : ""}</b>
              </span>
            </div>
            <div className={styles.userInfoLine}>
              <span>
                Username: <b> {user_name ? user_name : ""}</b>
              </span>
            </div>
            <div className={styles.userInfoLine}>
              <span>
                E-mail: <b>{e_mail ? e_mail : ""}</b>
              </span>
            </div>
            <div className={styles.userInfoLine}>
              <span>
                Account Type: <b>{role ? role : ""}</b>
              </span>
            </div>
            <div className={styles.logoutButton}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileLayout;
