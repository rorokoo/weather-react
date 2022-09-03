import React, { useContext } from "react";
import WeatherIcon from "./WeatherIcon";
import { ForecastDayContext } from "./ForecastDayContext";

export default function ForecastDay(props) {
  let unit = useContext(ForecastDayContext)[0];

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let date = new Date(props.data.dt * 1000);

  let day = days[date.getDay()];

  let min = props.data.temp.min;
  let max = props.data.temp.max;

  if (unit !== "celsius") {
    min = (min * 9) / 5 + 32;
    max = (max * 9) / 5 + 32;
  }

  return (
    <div className="forecastDay">
      <div className="day">{day}</div>
      <div className="dayIcon">
        <WeatherIcon icon={props.data.weather[0].icon} size={50} />
      </div>
      <span className="forecastTemp">
        <span className="dayTempMin" title="min">
          {Math.round(min)}°
        </span>
        <span className="dayTempMax" title="max">
          {" "}
          {Math.round(max)}°
        </span>
      </span>
    </div>
  );
}
