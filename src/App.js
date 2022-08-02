import React from "react";
import { Container } from "@mui/material";
import { Footer, Header } from "./components/";
import { FullPost, Home, Login } from "./pages";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Container className={styles.content} maxWidth="lg">
        {/*<Home />*/}
        {/*<FullPost />*/}
        <Login />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
