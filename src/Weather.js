import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <h1>New York</h1>
        <ul>
          <li id="day">Wednesday</li>
          <li id="typeWeather">Sunny</li>
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
                <span className="temperature">{Math.round(temperature)}</span>{" "}
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6" id="description">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 4mph</li>
            </ul>
          </div>
        </div>

        <form id="search-bar">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-6">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-50"
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
