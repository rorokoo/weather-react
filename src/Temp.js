import React, { useState, useEffect, useContext } from "react";
import "./Styling/Temp.css";
import { ForecastDayContext } from "./ForecastDayContext";

export default function Temp(props) {
  let [temp, showTemp] = useState(props.celsius);
  let setUnit = useContext(ForecastDayContext)[1];

  useEffect(() => {
    showTemp(props.celsius);
  }, [props.celsius]);

  function showCelsius(event) {
    event.preventDefault();
    showTemp(props.celsius);
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    showTemp((props.celsius * 9) / 5 + 32);
    setUnit("farenheight");
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
