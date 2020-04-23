import React, { useState } from "react";
import Unit from "./Unit.js";

export default function UnitSelect(props) {
  let degreesCelsius = props.degreesCelsius;
  const [metrics, setMetrics] = useState(props.unitSelected);
  function showFahrenheit(event) {
    event.preventDefault();
    setMetrics("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setMetrics("celsius");
  }

  if (metrics === "fahrenheit") {
    return (
      <div>
        <div>
          {" "}
          <span className="unit">
            Unit:
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
        <div className="row">
          <div className="col-sm">
            <p>Now: </p>
          </div>
          <div className="col-sm">
            <Unit unidade="fahrenheit" degreesCelsius={degreesCelsius} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <span className="unit">
            Unit: °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
        <div className="row">
          <div className="col-sm">
            <p>Now: </p>
          </div>
          <div className="col-sm">
            <Unit unidade="celsius" degreesCelsius={degreesCelsius} />
          </div>
        </div>
      </div>
    );
  }
}
