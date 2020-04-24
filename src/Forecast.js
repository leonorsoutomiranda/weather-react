import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon.js";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastdata, setForecastdata] = useState(null);
  function handleForecastResponse(response) {
    setForecastdata(response.data);
    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <p> Next hours forecast:</p>

        <div className="row">
          <div className="col-sm">
            01: 00
            <WeatherIcon id={forecastdata.list[0].weather[0].icon} />
            Max:{Math.round(forecastdata.list[0].main.temp)}º C Min:
            {Math.round(forecastdata.list[0].main.temp)}º C
          </div>
          <div className="col-sm">
            01: 00
            <WeatherIcon id={forecastdata.list[0].weather[0].icon} />
            Max:{Math.round(forecastdata.list[0].main.temp)}º C Min:
            {Math.round(forecastdata.list[0].main.temp)}º C
          </div>
          <div className="col-sm">
            01: 00
            <WeatherIcon id={forecastdata.list[0].weather[0].icon} />
            Max:{Math.round(forecastdata.list[0].main.temp)}º C Min:
            {Math.round(forecastdata.list[0].main.temp)}º C
          </div>
          <div className="col-sm">
            01: 00
            <WeatherIcon id={forecastdata.list[0].weather[0].icon} />
            Max:{Math.round(forecastdata.list[0].main.temp)}º C Min:
            {Math.round(forecastdata.list[0].main.temp)}º C
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
