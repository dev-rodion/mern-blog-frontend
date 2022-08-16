import React from "react";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import styles from "./Registration.module.scss";

const Registration = () => {
  return (
    <Paper className={styles.root}>
      <Typography variant="h5" className={styles.title}>
        Create an Account
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className={styles.field} label="Username" fullWidth />
      <TextField className={styles.field} label="Email" fullWidth />
      <TextField className={styles.field} label="Password" fullWidth />
      <Button className={styles.button} size="large" variant="contained" fullWidth>
        Submit
      </Button>
    </Paper>
  );
};

export default Registration;
