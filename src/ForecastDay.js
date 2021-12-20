import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  let date = new Date(props.data.daily[1].dt * 1000);

  let day = days[date.getDay()];

  let minTemp = Math.round(props.data.daily[1].temp.min);
  let maxTemp = Math.round(props.data.daily[1].temp.max);

  return (
    <div>
      <div className="day">{day}</div>
      <div className="dayIcon">
        <WeatherIcon icon={props.data.daily[1].weather[0].icon} size={50} />
      </div>
      <span className="dayTempMin">{minTemp}°</span>
      <span className="dayTempMax"> {maxTemp}°</span>
    </div>
  );
}
