import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <ul>
          <li id="day">{weatherData.date}</li>
          <li id="typeWeather" className="text-capitalize">
            {weatherData.description}
          </li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Sunny"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6" id="description">
            <ul>
              <li id="time">15:00</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>

        <form id="search-bar">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
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
    const apiKey = "aff29a6b33c30edafe99104b632f71d7";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
