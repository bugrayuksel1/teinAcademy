import React, { useEffect, useState } from "react";
import styles from "./usercontrol.module.css";
import { getUserList } from "../../../redux/userlistSlice";
import { useDispatch, useSelector } from "react-redux";
import AtomInput from "../../../components/atomics/atomInput";
import assets from "../../../assets";
import axios from "axios";
import UserListItem from "../../../components/ui/userListItem";
import AtomButton from "../../../components/atomics/atomButton";
import Image from "next/image";

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
            <Image
              alt="close icon"
              src={assets.icons.errorDialogCloseIcon}
              width={24}
              height={24}
            />
          </div>
          <div>
            <AtomInput
              className={styles.atomInputOverRide}
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
              className={styles.atomInputOverRide}
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
              className={styles.atomInputOverRide}
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
              className={styles.atomInputOverRide}
              title="Role"
              name="role"
              type="text"
              placeHolder="Role"
              onChange={setRole}
              value={role}
            />
          </div>
          <div className={styles.button}>
            <AtomButton
              className={styles.testButton}
              onClick={handleSubmitUpdateForm}
              text="Submit Update"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.userList}>
        {isShowForm && updateForm()}
        {userList.map((user) => {
          return (
            <UserListItem user={user} listButtonHandler={listButtonHandler} />
          );
        })}
      </div>
    </div>
  );
}

export default UserControl;
