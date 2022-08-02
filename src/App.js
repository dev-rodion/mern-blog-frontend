import React from "react";
import { Container } from "@mui/material";
import { Header } from "./components/";
import { FullPost, Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {/*<Home />*/}
        <FullPost />
      </Container>
    </>
  );
}

export default App;
