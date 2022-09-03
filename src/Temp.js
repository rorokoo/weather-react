import React, { useContext } from "react";
import "./Styling/Temp.css";
import { ForecastDayContext } from "./ForecastDayContext";

export default function Temp(props) {
  let temp = props.celsius;

  let unit = useContext(ForecastDayContext)[0];

  if (unit !== "celsius") {
    temp = (props.celsius * 9) / 5 + 32;
  }

  return <div className="temp">{Math.round(temp)}</div>;
}
