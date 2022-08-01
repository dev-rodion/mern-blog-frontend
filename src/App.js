import React from "react";
import { Container } from "@mui/material";
import { Header } from "./components/";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
      </Container>
    </>
  );
}

export default App;
