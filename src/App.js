import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Footer, Header } from "./components/";
import { AddPost, FullPost, Home, Login, Registration } from "./pages";
import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "./helpers/ScrollToTop";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth.js";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  console.log(isAuth);

  return (
    <div className={styles.wrapper}>
      <ScrollToTop />
      <Header />
      <Container className={styles.content} maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/posts/create" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
