import React from "react";

import styles from "./Header.module.scss";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, logout } from "../../redux/slices/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      dispatch(logout());
    }
  };

  return (
    <header className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <div>MERN BLOG</div>
          </Link>

          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Create a Post</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Sing Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
