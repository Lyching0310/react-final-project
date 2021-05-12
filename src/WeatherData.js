import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherData(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li id="day">
          <FormattedDate date={props.data.date} />
        </li>
        <li id="typeWeather" className="text-capitalize">
          {props.data.description}
        </li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperatureNumeric">
                {Math.round(props.data.temperature)}
              </span>{" "}
              <p className="units">
                <span className="celsius">°C</span>
                {""} | {""}
                <span className="fahrenheit">°F</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6" id="description">
          <ul>
            <li id="time">
              <FormattedTime date={props.data.date} />{" "}
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
