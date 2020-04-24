import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./Forecast.css";

export default function ForecastDisplay(props) {
  return (
    <div className="col-sm">
      {new Date(props.info.dt * 1000).getHours()}:00
      <WeatherIcon id={props.info.weather[0].icon} />
      <span className="max-min">
        Max: {Math.round(props.info.main.temp_max)} º C <br />
        Min: {Math.round(props.info.main.temp_min)} º C
      </span>
    </div>
  );
}
