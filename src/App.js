import "./Styling/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import React from "react";
import GitLink from "./GitLink";

function App() {
  return (
    <div>
      <div className="App">
        <Container>
          <Weather />
        </Container>
      </div>
      <GitLink />
    </div>
  );
}

export default App;
