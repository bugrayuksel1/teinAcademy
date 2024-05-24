import React, { useEffect, useState } from "react";
import styles from "./usercontrol.module.css";
import { getUserList } from "../../../redux/userlistSlice";
import { useDispatch, useSelector } from "react-redux";
import AtomInput from "../../../atomics/atomInput";
import assets from "../../../assets";
import axios from "axios";

function UserControl() {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.userlistSlice);
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [eMail, setEMail] = useState("");
  const [role, setRole] = useState("");
  const [isShowForm, setIsShowForm] = useState(false);
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const listButtonHandler = (user) => {
    setIsShowForm(true);
    setUserName(user.user_name);
    setFullName(user.full_name);
    setEMail(user.e_mail);
    setRole(user.role);
  };

  const handleCloseIcon = () => {
    setUserName("");
    setFullName("");
    setEMail("");
    setRole("");
    setIsShowForm(false);
  };

  const handleSubmitUpdateForm = async () => {
    const result = await axios.post("http://localhost/updateuserbyadmin", {
      eMail,
      fullName,
      role,
      userName,
    });
    console.log("result: ", result);
    if (result.data === "ok") {
      setIsShowForm(false);
    }
  };

  const updateForm = () => {
    return (
      <div className={styles.userUpdateForm}>
        <div className={styles.formArea}>
          <div onClick={handleCloseIcon} className={styles.closeIcon}>
            <img
              alt="close icon"
              src={assets.icons.errorDialogCloseIcon}
              width={24}
              height={24}
            />
          </div>
          <div>
            <AtomInput
              title="User Name"
              name="username"
              type="text"
              placeHolder="User Name"
              onChange={setUserName}
              disabled
              value={userName}
            />
          </div>
          <div>
            <AtomInput
              title="Full Name"
              name="fullname"
              type="text"
              placeHolder="Full Name"
              onChange={setFullName}
              value={fullName}
            />
          </div>
          <div>
            <AtomInput
              title="E-Mail"
              name="email"
              type="text"
              placeHolder="E-Mail"
              onChange={setEMail}
              value={eMail}
            />
          </div>
          <div>
            <AtomInput
              title="Role"
              name="role"
              type="text"
              placeHolder="Role"
              onChange={setRole}
              value={role}
            />
          </div>
          <div className={styles.button}>
            <button onClick={handleSubmitUpdateForm}>Submit Update</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {isShowForm && updateForm()}
      {userList.map((user) => {
        return (
          <div className={styles.userList}>
            <div className={styles.userName}>{user.user_name}</div>
            <div className={styles.fullName}>{user.full_name}</div>
            <div className={styles.eMail}>{user.e_mail}</div>
            <div className={styles.role}>{user.role}</div>
            <div className={styles.updateButton}>
              <button onClick={() => listButtonHandler(user)}>Update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserControl;
