import "./Styling/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import React from "react";
import GitLink from "./GitLink";

function App() {
  return (
    <Container>
      <div className="App">
        <Weather />
        <GitLink />
      </div>
    </Container>
  );
}

export default App;
