import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import WeatherData from "./WeatherData.js";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <WeatherData defaultcity="Aveiro" />
        </div>
      </div>
      <p className="coder">
        <a
          className="coder"
          href="https://github.com/leonorsoutomiranda/weather-react"
        >
          Open-source code
        </a>
        by Leonor Miranda
      </p>
    </div>
  );
}
