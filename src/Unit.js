import React from "react";
import "./App.css";

export default function Unit(props) {
  let tempCelsius = props.degreesCelsius;
  let tempFahr = (props.degreesCelsius * 9) / 5 + 32;
  let UnitFinal = props.unidade;
  if (UnitFinal === "fahrenheit") {
    return (
      <div className="currentdegrees">
        {Math.round(tempFahr)}
        ºF
      </div>
    );
  } else {
    return (
      <div className="currentdegrees">
        {Math.round(tempCelsius)}
        ºC
      </div>
    );
  }
}
