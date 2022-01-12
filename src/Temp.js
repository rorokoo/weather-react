import React, { useState, useEffect, useContext } from "react";
import "./Styling/Temp.css";
import { ForecastDayContext } from "./ForecastDayContext";

export default function Temp(props) {
  let [temp, showTemp] = useState(props.celsius);
  let setUnit = useContext(ForecastDayContext)[1];
  let [celsius, setCelsius] = useState("unit");
  let [fahrenheit, setFahrenheit] = useState("otherUnit");

  useEffect(() => {
    showTemp(props.celsius);
  }, [props.celsius]);

  function showCelsius(event) {
    event.preventDefault();
    showTemp(props.celsius);
    setUnit("celsius");
    setCelsius("unit");
    setFahrenheit("otherUnit");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    showTemp((props.celsius * 9) / 5 + 32);
    setUnit("farenheight");
    setFahrenheit("unit");
    setCelsius("otherUnit");
  }

  return (
    <div className="temp">
      {Math.round(temp)}
      <a href="/" className={celsius} onClick={showCelsius}>
        °C{" "}
      </a>
      <a href="/" className={fahrenheit} onClick={showFahrenheit}>
        °F{" "}
      </a>
    </div>
  );
}
