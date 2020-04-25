import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import CurrentDate from "./CurrentDate.js";
import WeatherIcon from "./WeatherIcon.js";
import Forecast from "./Forecast.js";
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
        <div className="row">
          <div className="col">
            <form onSubmit={HandleSearch}>
              <input
                type="text"
                placeholder=" Search Location"
                autoFocus="on"
                onChange={updateCity}
              />{" "}
              <span> </span>
              <a className="search-btn" href="/" onClick={HandleSearch}>
                <i className="fas fa-search-location" />
              </a>
            </form>
          </div>
        </div>
        <div className="card card-two">
          <div className="card-body card-body-two">
            <div className="currentlocation">{WeatherInfo.city}</div>
            <div className="currentdate">
              <CurrentDate date={WeatherInfo.date} />
            </div>

            <div>
              <div className="row">
                <UnitSelect
                  unitSelected={"celsius"}
                  degreesCelsius={WeatherInfo.temperature}
                />
                <div className="col-"></div>
                <WeatherIcon id={WeatherInfo.icon} />
                <div className="col-"></div>
                <div className="col-sm">
                  <div className="currentwindrain">
                    | Humidity <span>{WeatherInfo.humidity}</span>
                    %
                    <br />| Wind <span>{WeatherInfo.wind}</span>km/h
                    <br />|
                    <span className="text-capitalize">
                      {" "}
                      {WeatherInfo.description}
                    </span>
                  </div>
                </div>
              </div>
              <div className="row" />
              <Forecast city={WeatherInfo.city} />
            </div>
          </div>
          <div>
            <button>
              {" "}
              <a className="go-home" href="/">
                Back to home location
              </a>
            </button>
          </div>{" "}
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading";
  }
}
