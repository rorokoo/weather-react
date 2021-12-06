import "./Styling/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import React from "react";

function App() {
  return (
    <div className="App">
      <Container>
        <Weather />
      </Container>
    </div>
  );
}

export default App;
