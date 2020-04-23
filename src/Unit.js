import React from "react";

export default function Unit(props) {
  let tempCelsius = props.degreesCelsius;
  let tempFahr = (props.degreesCelsius * 9) / 5 + 32;
  let UnitFinal = props.unidade;
  if (UnitFinal === "fahrenheit") {
    console.log("changed");
    return (
      <div className="currentdegrees">
        {Math.round(tempFahr)}
        ºF
      </div>
    );
  } else {
    console.log("ok");
    return (
      <div className="currentdegrees">
        {Math.round(tempCelsius)}
        ºC
      </div>
    );
  }
}
