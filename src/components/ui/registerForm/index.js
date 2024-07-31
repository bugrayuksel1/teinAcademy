import React, { useState } from "react";
import styles from "./registerDialog.module.css";
import assets from "../../../assets";
import { useDispatch } from "react-redux";
import { toggleRegisterForm } from "../../../redux/globalSlice";
import AtomInput from "../../atomics/atomInput";
import axios from "axios";
import Image from "next/image";

function RegisterDialog() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const submitRegister = async () => {
    if (!(userName && password && password2 && fullName && email)) {
      alert("tüm alanları doldur.");
      return null;
    }
    if (password !== password2) {
      alert("şifre alanlarını kontrol edin.");
      return null;
    }
    const result = await axios.post("http://localhost/register", {
      userName,
      password,
      fullName,
      email,
    });
    if (result?.data?.status === "success") {
      setIsFormSuccess(true);
      setTimeout(() => {
        dispatch(toggleRegisterForm());
      }, 2000);
    } else {
      setIsFormError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.registerFormContainer}>
        <div
          onClick={() => dispatch(toggleRegisterForm())}
          className={styles.closeIcon}
        >
          <Image
            alt="close"
            src={assets.icons.errorDialogCloseIcon}
            width="32"
            height="32"
          />
        </div>
        {isFormSuccess && <h1>Tebrikler başarılı.</h1>}
        {isFormError && <h1>Hata Oluştu</h1>}
        {!isFormError && !isFormSuccess && (
          <>
            <div>
              <h2>Üyelik Formu</h2>
            </div>
            <div className={styles.inputArea}>
              <AtomInput
                title="User Name"
                name="userName"
                type="text"
                placeHolder="User Name..."
                onChange={setUserName}
                className={styles.atomText}
              />
            </div>
            <div className={styles.inputArea}>
              <AtomInput
                title="Password"
                name="password"
                type="password"
                placeHolder="Password..."
                onChange={setPassword}
                className={styles.atomText}
              />
            </div>
            <div className={styles.inputArea}>
              <AtomInput
                title="Password"
                name="password2"
                type="password"
                placeHolder="Re-Type Password..."
                onChange={setPassword2}
                className={styles.atomText}
              />
            </div>
            <div className={styles.inputArea}>
              <AtomInput
                title="Name Surname"
                name="fullname"
                type="text"
                placeHolder="Name Surname..."
                onChange={setFullName}
                className={styles.atomText}
              />
            </div>
            <div className={styles.inputArea}>
              <AtomInput
                title="E-Mail"
                name="email"
                type="text"
                placeHolder="E-Mail..."
                onChange={setEmail}
                className={styles.atomText}
              />
            </div>
            <div className={styles.buttonArea}>
              <button onClick={submitRegister}>Üye Ol</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RegisterDialog;
