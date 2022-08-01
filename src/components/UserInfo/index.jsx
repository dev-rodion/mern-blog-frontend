import React from "react";
import styles from "./UserInfo.module.scss";

const UserInfo = ({ avatarUrl, username, additionalText }) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.avatar}
        src={avatarUrl || "/noavatar.png"}
        alt={username}
      />
      <div className={styles.userDetails}>
        <span className={styles.username}>{username}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};

export default UserInfo;
