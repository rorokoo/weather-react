import React, { useState, useEffect, useContext } from "react";
import { ForecastDayContext } from "./ForecastDayContext";

export default function Units(props) {
  let [opacity, setOpacity] = useState({
    celsius: "1",
    farenheight: "0.3",
  });

  let setUnit = useContext(ForecastDayContext)[1];

  useEffect(() => {
    setOpacity({ celsius: "1", farenheight: "0.3" });
  }, [props.celsius]);

  function showCelsius(event) {
    event.preventDefault();
    setOpacity({ celsius: "1", farenheight: "0.3" });
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();

    setOpacity({ celsius: "0.3", farenheight: "1" });
    setUnit("farenheight");
  }

  return (
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
  );
}
