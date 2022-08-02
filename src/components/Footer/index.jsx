import React from "react";
import styles from "./Footer.module.scss";
import { Container, Typography } from "@mui/material";

const MyComponent = () => {
  return (
    <footer className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Typography variant="subtitle2" className={styles.copyright}>
            <b>MERN Blog</b> developed by{" "}
            <a href="https://github.com/dev-rodion">RodionDev</a>
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default MyComponent;
