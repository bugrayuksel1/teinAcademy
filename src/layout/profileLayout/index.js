import React, { useState } from "react";
import styles from "./profileLayout.module.css";
import assets from "../../assets";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/userSlice";

function ProfileLayout() {
  const dispatch = useDispatch();
  const { isLoggedIn, user_name, e_mail, role, full_name } = useSelector(
    (state) => state.user.userInfo
  );
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
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
    const result = await axios.post("http://localhost/register", {
      userName,
      password,
    });
    console.log("result:", result);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.profile}>
          <img alt="profil" src={assets.images.user} />
        </div>
        {!isLoggedIn && (
          <>
            <div className={styles.userName}>
              <div>
                <label htmlFor="loginInput">Login</label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  id="loginInput"
                  type="text"
                  placeholder="User Name..."
                />
              </div>
            </div>
            <div className={styles.password}>
              <div>
                <label htmlFor="registerInput">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="registerInput"
                  type="password"
                  placeholder="Password..."
                />
              </div>
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
        {isLoggedIn && (
          <div className={styles.userInfo}>
            <div className={styles.userInfoLine}>
              <span>
                Name: <b>{full_name}</b>
              </span>
            </div>
            <div className={styles.userInfoLine}>
              <span>
                Username: <b>{user_name}</b>
              </span>
            </div>
            <div className={styles.userInfoLine}>
              <span>
                E-mail: <b>{e_mail}</b>
              </span>
            </div>
            <div className={styles.userInfoLine}>
              <span>
                Account Type: <b>{role}</b>
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
