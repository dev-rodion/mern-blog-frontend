import React from "react";
import { Container } from "@mui/material";
import { Footer, Header } from "./components/";
import { FullPost, Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {/*<Home />*/}
        <FullPost />
      </Container>
      <Footer />
    </>
  );
}

export default App;
