import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import WeatherData from "./WeatherData.js";
import CurrentDate from "./CurrentDate.js";
import city from "./Search.js";
import temperature from "./Search.js";
import humidity from "./Search.js";
import wind from "./Search.js";
import description from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <form id="location-form">
            <input
              type="text"
              placeholder=" Search Location"
              id="location-input"
              autoFocus="on"
            />{" "}
            <span> </span>
            <a className="search-btn" href="/">
              <i className="fas fa-search-location" />
            </a>
          </form>
          <WeatherData defaultcity="Aveiro" />
        </div>
      </div>
      <p className="coder">
        <a
          className="coder"
          href="https://github.com/leonorsoutomiranda/weather-react"
          target="_blank"
        >
          Open-source code
        </a>
        by Leonor Miranda
      </p>
    </div>
  );
}
