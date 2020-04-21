import React, { useState } from "react";

export default function UnitSelect() {
  const [unidade, setUnidade] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnidade("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnidade("celsius");
  }

  if (unidade === "fahrenheit") {
    return (
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
    );
  } else {
    return (
      <div>
        <span className="unit">
          Unit: °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
