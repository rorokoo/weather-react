import React, { useState } from "react";
import "./Styling/Search.css";
import MyLocation from "./MyLocation";
import WeatherIcon from "./WeatherIcon";
import Temp from "./Temp";
import City from "./City";
import FormattedDate from "./FormattedDate";
import MoreInfo from "./MoreInfo";
import Forecast from "./Forecast";
import axios from "axios";

export default function Search(props) {
  let [weatherData, setWeatherData] = useState({
    ready: false,
  });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function fetchData() {
    let key = `1a9b8310a2b65284eac4c79ff72690e4`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="search" onSubmit={handleSubmit}>
          <input
            className="searchBox"
            type="search"
            onChange={handleCityChange}
          />
          <input className="searchButton" type="submit" value="Search" />
        </form>
        <MyLocation />
        <City city={weatherData.city} />
        <FormattedDate date={weatherData.date} />
        <WeatherIcon icon={weatherData.icon} />
        <Temp celsius={weatherData.temperature} />
        <MoreInfo
          wind={weatherData.wind}
          description={weatherData.description}
        />
        <Forecast />
      </div>
    );
  } else {
    fetchData();

    return "Loading...";
  }
}
