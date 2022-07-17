import "./Styling/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import React from "react";
import GitLink from "./GitLink";
import ReactGA from "react-ga";

const TRACKING_ID = "G-07JLFZW91M";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Container>
      <div className="App">
        <Weather />
      </div>
      <GitLink />
    </Container>
  );
}

export default App;
