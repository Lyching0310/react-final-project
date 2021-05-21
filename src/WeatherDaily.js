import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDaily.css";
import axios from "axios";

export default function WeatherDaily(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "aff29a6b33c30edafe99104b632f71d7";
  let long = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherDaily">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thursday</div>
          <WeatherIcon code="01d" size={40} />
          <div className="WeatherForecast-temp">
            <span className="WeatherTemp-max">19</span>
            <span className="WeatherTemp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
