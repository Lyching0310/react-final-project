import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li id="day">Wednesday</li>
        <li>Sunny</li>
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
              <span className="temperature">20</span>{" "}
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

      <form>
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
}
