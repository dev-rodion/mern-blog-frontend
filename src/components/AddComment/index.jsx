import React from "react";
import styles from "./AddComment.module.scss";
import { Avatar, Button, TextField } from "@mui/material";

const AddComment = () => {
  return (
    <>
      <div className={styles.root}>
        <Avatar className={styles.avatar} src="https://mui.com/static/images/avatar/1.jpg" />
        <div className={styles.form}>
          <TextField label="Text your comment" variant="outlined" maxRows={10} minRows={2} multiline fullWidth />
          <Button variant="contained">Comment</Button>
        </div>
      </div>
    </>
  );
};

export default AddComment;
