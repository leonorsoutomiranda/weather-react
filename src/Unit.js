import React, { useState } from "react";
import UnitSelect from "./UnitSelect.js";

export default function Unit(props) {
  let [unit, setUnit] = useState("celsius");

  if (unit === "celsius") {
    return (
      <div className="currentdegrees" id="temperature">
        {Math.round(props.celsius)}
        ºC
      </div>
    );
  } else {
    return "F";
  }
}
