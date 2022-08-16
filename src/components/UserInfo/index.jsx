import React from "react";
import { Avatar } from "@mui/material";
import styles from "./UserInfo.module.scss";

const UserInfo = ({ avatarUrl, username, additionalText }) => {
  return (
    <div className={styles.root}>
      <Avatar className={styles.avatar} src={avatarUrl || ""} alt={username} />
      <div className={styles.userDetails}>
        <span className={styles.username}>{username}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};

export default UserInfo;
