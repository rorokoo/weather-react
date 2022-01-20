import React, { useState, useEffect, useContext } from "react";
import "./Styling/Temp.css";
import { ForecastDayContext } from "./ForecastDayContext";

export default function Temp(props) {
  let [temp, showTemp] = useState(props.celsius);
  let [opacity, setOpacity] = useState({ celsius: "1", farenheight: "0.3" });
  let setUnit = useContext(ForecastDayContext)[1];

  useEffect(() => {
    showTemp(props.celsius);
  }, [props.celsius]);

  useEffect(() => {
    setOpacity({ celsius: "1", farenheight: "0.3" });
  }, [props.celsius]);

  function showCelsius(event) {
    event.preventDefault();
    showTemp(props.celsius);
    setOpacity({ celsius: "1", farenheight: "0.3" });
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    showTemp((props.celsius * 9) / 5 + 32);
    setOpacity({ celsius: "0.3", farenheight: "1" });
    setUnit("farenheight");
  }

  return (
    <div>
      <span className="temp">{Math.round(temp)}</span>
      <span className="units">
        <a href="/" onClick={showCelsius} style={{ opacity: opacity.celsius }}>
          °C{" "}
        </a>
        <a
          href="/"
          className="otherUnit"
          onClick={showFahrenheit}
          style={{ opacity: opacity.farenheight }}
        >
          °F{" "}
        </a>
      </span>
    </div>
  );
}
