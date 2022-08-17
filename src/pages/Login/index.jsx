import React from "react";
import styles from "./Login.module.scss";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "user@gmail.com",
      password: "user132@",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

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
      <Typography variant="h4" className={styles.title}>
        Login Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Email"
          fullWidth
          error={Boolean(errors.email)}
          helperText={errors.email && errors.email.message}
          type="email"
          {...register("email", { required: "Enter your email", minLength: 5 })}
        />
        <TextField
          className={styles.field}
          label="Password"
          fullWidth
          type="password"
          error={Boolean(errors.password)}
          helperText={errors.password && errors.password.message}
          {...register("password", { required: "Enter your password", minLength: 7 })}
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

export default Login;
