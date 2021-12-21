import React, { useState, useEffect } from "react";
import "./Styling/Forecast.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  function fetchData() {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let key = `4a38f0a4e469902661c0087dd47731b6`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    console.log(true);
    return (
      <div className="forecast">
        <Row className="text-center">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 5) {
              return (
                <Col key={index}>
                  <ForecastDay data={dailyForecast} />
                </Col>
              );
            }
            return null;
          })}
        </Row>
      </div>
    );
  } else {
    console.log(false);
    fetchData();
    return null;
  }
}
