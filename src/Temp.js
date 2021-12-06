import React, { useState } from "react";
import "./Styling/Temp.css";
import axios from "axios";
import { WiDaySunny } from "weather-icons-react";

export default function Temp() {
  let [temp, setTemp] = useState(null);

  function getTemp(response) {
    setTemp(response.data.main.temp);
  }
  let key = `f5029b784306910c19746e40c14d6cd3`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${key}&units=metric`;

  axios.get(url).then(getTemp);

  return (
    <div className="temp">
      <WiDaySunny className="icon" size={70} color="#000" />
      {Math.round(temp)}
      <span className="celsius">°C</span>
    </div>
  );
}
