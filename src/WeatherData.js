import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import CurrentDate from "./CurrentDate.js";
import WeatherIcon from "./WeatherIcon.js";
import Unit from "./Unit.js";
import UnitSelect from "./UnitSelect.js";

export default function WeatherData(props) {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultcity);
  let [WeatherInfo, setWeatherInfo] = useState({});

  function HandleSearch(event) {
    event.preventDefault();
    Search();
  }
  function Search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(updateWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function updateWeather(response) {
    setWeatherInfo({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <form onSubmit={HandleSearch} id="location-form">
          <input
            type="text"
            placeholder=" Search Location"
            id="location-input"
            autoFocus="on"
            onChange={updateCity}
          />{" "}
          <span> </span>
          <a className="search-btn" href="/" onClick={HandleSearch}>
            <i className="fas fa-search-location" />
          </a>
        </form>
        <div className="card card-two">
          <div className="card-body card-body-two">
            <div className="currentlocation" id="current-location">
              {WeatherInfo.city}
            </div>
            <div className="currentdate">
              <CurrentDate date={WeatherInfo.date} />
            </div>

            <container>
              <div>
                <div className="row">
                  <UnitSelect
                    unitSelected={"celsius"}
                    degreesCelsius={WeatherInfo.temperature}
                  />

                  <div className="col-sm">
                    <WeatherIcon id={WeatherInfo.icon} />
                  </div>
                  <div className="col-sm">
                    <div className="currentwindrain">
                      | Humidity{" "}
                      <span id="humidity">{WeatherInfo.humidity}</span>
                      %
                      <br />| Wind <span id="wind">{WeatherInfo.wind}</span>km/h
                      <br />|
                      <span
                        id="description-weather"
                        className="text-capitalize"
                      >
                        {" "}
                        {WeatherInfo.description}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm" />
                  <div className="col-sm" />
                </div>
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
    );
  } else {
    Search();
    return "Loading";
  }
}
