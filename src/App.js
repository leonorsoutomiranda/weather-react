import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import city from "./Search.js";
import temperature from "./Search.js";
import humidity from "./Search.js";
import wind from "./Search.js";
import description from "./Search.js";

export default function App() {
  let AppData = {
    CurrentLocation: { city },
    CurrentDate: "Sunday, March-29, 20:47",
    CurrentTemperature: { temperature },
    Humidity: { humidity },
    Wind: { wind },
    Description: { description },
  };
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <form id="location-form">
            <input
              type="text"
              placeholder=" Search Location"
              id="location-input"
            />
            <a className="search-btn" href="/">
              <i className="fas fa-search-location" />
            </a>
          </form>
          <div className="card card-two">
            <div className="card-body card-body-two">
              <div className="currentlocation" id="current-location">
                {AppData.CurrentLocation} | Last updated: {AppData.CurrentDate}
              </div>
              <div className="unit">
                Unit:{" "}
                <a href="/" id="celsius-link">
                  Celsius
                </a>{" "}
                |{" "}
                <a href="/" id="f-link">
                  Fahrenheit
                </a>
              </div>
              <container>
                <div className="row">
                  <div className="col-sm">
                    <p>Now: {AppData.CurrentTemperature}</p>
                  </div>
                  <div className="col-sm">
                    <div className="currentdegrees" id="temperature" />
                  </div>
                  <div className="col-sm"></div>
                  <div className="col-sm">
                    <div className="currentwindrain">
                      | Humidity <span id="humidity">{AppData.Humidity}</span>%
                      <br />| Wind <span id="wind">{AppData.Wind}</span>km/h
                      <br />|
                      <span id="description-weather">
                        {AppData.Description}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm" />
                  <div className="col-sm" />
                  <div className="col-sm" />
                  <div className="col-sm" />
                </div>
                <p id="next-hours" />

                <div className="row" id="forecast" />
              </container>
            </div>
            <div>
              <button id="go-home">Back to current location</button>
            </div>{" "}
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
    </div>
  );
}
