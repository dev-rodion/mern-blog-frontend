import React from "react";
import styles from "./Login.module.scss";
import { Button, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Paper className={styles.root}>
      <Typography variant="h4" className={styles.title}>
        Login Form
      </Typography>
      <TextField className={styles.field} label="Email" fullWidth />
      <TextField className={styles.field} label="Password" fullWidth />
      <Button
        className={styles.button}
        size="large"
        variant="contained"
        fullWidth
      >
        Submit
      </Button>
    </Paper>
  );
};

export default Login;
