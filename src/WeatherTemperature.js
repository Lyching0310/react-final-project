import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="temperatureNumeric">{Math.round(props.celsius)}</span>{" "}
        <span className="celsius">°C |</span>
        <a href="/" onClick={showFahrenheit} className="fahrenheit">
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span id="temperatureNumeric">{Math.round(fahrenheit)}</span>{" "}
        <a href="/" onClick={showCelsius} className="celsius">
          °C |
        </a>
        <span className="fahrenheit">°F</span>
      </div>
    );
  }
}
