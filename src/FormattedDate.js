import React from "react";
import "./Styling/FormattedDate.css";

export default function FormattedDate(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekday = weekdays[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let day = props.date.getDate();
  let year = props.date.getFullYear();

  let hours = props.date.getHours();

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span className="FormattedDate">
      <h3>
        updated at {hours}:{minutes}
      </h3>
      <h3>
        {weekday}, {month} {day}, {year}
      </h3>
    </span>
  );
}
