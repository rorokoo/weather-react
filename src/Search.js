import React, { useState, useContext } from "react";
import "./Styling/Search.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import WeatherIcon from "./WeatherIcon";
import Temp from "./Temp";
import City from "./City";
import FormattedDate from "./FormattedDate";
import MoreInfo from "./MoreInfo";
import Forecast from "./Forecast";
import axios from "axios";
import { ForecastDayContext } from "./ForecastDayContext";

export default function Search(props) {
  let [weatherData, setWeatherData] = useState({
    ready: false,
  });
  let [city, setCity] = useState(props.defaultCity);

  let setUnit = useContext(ForecastDayContext)[1];

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
    let key = `4a38f0a4e469902661c0087dd47731b6`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUnit("celsius");
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
            type="text"
            onChange={handleCityChange}
          />
          <input className="searchButton" type="submit" value="Search" />
        </form>
        <Row>
          <Col md={5}>
            <City city={weatherData.city} />
            <FormattedDate date={weatherData.date} />
          </Col>
          <Col md="auto">
            <span className="WeatherIcon">
              <WeatherIcon icon={weatherData.icon} size={200} />
            </span>
          </Col>
          <Col>
            <Temp celsius={weatherData.temperature} />
            <MoreInfo
              description={weatherData.description}
              wind={weatherData.wind}
            />
          </Col>
        </Row>

        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    fetchData();

    return "Loading...";
  }
}
