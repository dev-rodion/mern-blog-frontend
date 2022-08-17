import React from "react";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import styles from "./Registration.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "User_2",
      email: "user_2@gmail.com",
      password: "user132@",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    console.log(data);

    if (!data.payload) {
      return alert("Failed to log in");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper className={styles.root}>
      <Typography variant="h5" className={styles.title}>
        Create an Account
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Username"
          type="text"
          fullWidth
          error={Boolean(errors.username)}
          helperText={errors.username && errors.username.message}
          {...register("username", { required: "Enter your username", minLength: 4 })}
        />
        <TextField
          className={styles.field}
          label="Email"
          fullWidth
          type="email"
          fullWidth
          error={Boolean(errors.email)}
          helperText={errors.email && errors.email.message}
          {...register("email", { required: "Enter your email", minLength: 4 })}
        />
        <TextField
          className={styles.field}
          label="Password"
          fullWidth
          type="password"
          fullWidth
          error={Boolean(errors.password)}
          helperText={errors.password && errors.password.message}
          {...register("password", { required: "Enter your password", minLength: 4 })}
        />
        <Button
          className={isValid ? styles.button : styles.button + " " + styles.buttonError}
          size="large"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Registration;
