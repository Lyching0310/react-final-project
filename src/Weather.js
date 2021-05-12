import React, { useState } from "react";

import WeatherData from "./WeatherData";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "aff29a6b33c30edafe99104b632f71d7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherData data={weatherData} />
        <form id="search-bar" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-5">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-40"
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();

    return "Loading...";
    //ADD LOADING SPINNER
  }
}
