import React from "react";

import styles from "./Header.module.scss";
import { Button, Container } from "@mui/material";

const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <header className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a href="/" className={styles.logo}>
            <div>MERN BLOG</div>
          </a>

          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <a href="/posts/create">
                  <Button variant="contained">Create a Post</Button>
                </a>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <a href="/login">
                  <Button variant="outlined">Log In</Button>
                </a>
                <a href="/register">
                  <Button variant="contained">Sing Up</Button>
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
