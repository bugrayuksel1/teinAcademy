import React from "react";
import styles from "./errorDialog.module.css";
import assets from "../../assets";
import { useDispatch } from "react-redux";
import { cleanError } from "../../redux/errorSlice";

function ErrorDialog({ title, description, isOkButton, isCloseButton }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.dialog}>
        {isCloseButton && (
          <div
            onClick={() => dispatch(cleanError())}
            className={styles.closeIcon}
          >
            <img
              alt="closeicon"
              width={36}
              height={36}
              src={assets.icons.errorDialogCloseIcon}
            />
          </div>
        )}
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.buttons}>
          {isOkButton && (
            <button onClick={() => dispatch(cleanError())}>OK</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ErrorDialog;
