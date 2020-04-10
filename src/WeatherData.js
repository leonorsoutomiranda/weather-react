import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function WeatherData(props) {
  let [ready, setReady] = useState(false);
  let [WeatherInfo, setWeatherInfo] = useState({});
  function updateWeather(response) {
    setWeatherInfo({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="card card-two">
        <div className="card-body card-body-two">
          <div className="currentlocation" id="current-location">
            {WeatherInfo.city} | Last updated: 10-04-2020
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
                <p>Now: {Math.round(WeatherInfo.temperature)} ºC</p>
              </div>
              <div className="col-sm">
                <div className="currentdegrees" id="temperature" />
              </div>
              <div className="col-sm"></div>
              <div className="col-sm">
                <div className="currentwindrain">
                  | Humidity <span id="humidity">{WeatherInfo.humidity}</span>%
                  <br />| Wind <span id="wind">{WeatherInfo.wind}</span>km/h
                  <br />|
                  <span id="description-weather" className="text-capitalize">
                    {WeatherInfo.description}
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
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(updateWeather);
    return "Loading";
  }
}
