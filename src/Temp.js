import React from "react";
import "./Styling/Temp.css";
import { WiDaySunny } from "weather-icons-react";

export default function Temp(props) {
  let temp = props.temp;

  return (
    <div className="temp">
      <WiDaySunny className="icon" size={70} color="#000" />
      {Math.round(temp)}
      <span className="celsius">°C</span>
    </div>
  );
}
