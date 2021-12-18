import React, { useState, useEffect } from "react";
import "./Styling/Temp.css";

export default function Temp(props) {
  let [temp, showTemp] = useState(props.celsius);

  useEffect(() => {
    showTemp(props.celsius);
  }, [props.celsius]);

  function showCelsius(event) {
    event.preventDefault();
    showTemp(props.celsius);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    showTemp((props.celsius * 9) / 5 + 32);
  }
  return (
    <div className="temp">
      {Math.round(temp)}
      <a href="/" className="unit" onClick={showCelsius}>
        °C{" "}
      </a>
      <a href="/" className="unit" onClick={showFahrenheit}>
        °F{" "}
      </a>
    </div>
  );
}
