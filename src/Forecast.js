import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

import ForecastDisplay from "./ForecastDisplay.js";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastdata, setForecastdata] = useState(null);
  function handleForecastResponse(response) {
    setForecastdata(response.data);
    setReady(true);
  }

  if (ready && props.city === forecastdata.city.name) {
    return (
      <div>
        <p> Next hours forecast:</p>

        <div className="row">
          <ForecastDisplay info={forecastdata.list[0]} />
          <ForecastDisplay info={forecastdata.list[1]} />
          <ForecastDisplay info={forecastdata.list[2]} />
          <ForecastDisplay info={forecastdata.list[3]} />
          <ForecastDisplay info={forecastdata.list[4]} />
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
