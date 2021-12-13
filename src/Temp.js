import React from "react";
import "./Styling/Temp.css";

export default function Temp(props) {
  let temp = props.temp;
  return (
    <div className="temp">
      {Math.round(temp)}
      <span className="celsius">°C</span>
    </div>
  );
}
