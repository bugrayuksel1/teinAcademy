import React from "react";
import styles from "./userListItem.module.css";
import AtomButton from "../../atomics/atomButton";

function UserListItem({ user, listButtonHandler }) {
  return (
    <div className={styles.userList}>
      <div className={styles.userName}>{user.user_name}</div>
      <div className={styles.fullName}>{user.full_name}</div>
      <div className={styles.eMail}>{user.e_mail}</div>
      <div className={styles.role}>{user.role}</div>
      <div className={styles.updateButton}>
        <AtomButton onClick={() => listButtonHandler(user)} text="Update" />
      </div>
    </div>
  );
}

export default UserListItem;
