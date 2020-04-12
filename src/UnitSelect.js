import React, { useState } from "react";
import Unit from "./Unit.js";

export default function UnitSelect() {
  function handleCelsiusClick(event) {
    event.preventDefault();
    return (
      <div>
        <Unit met={"celsius"} />;
      </div>
    );
    return (
      <div className="unit">
        Unit: <span>Celsius</span> |{" "}
        <a href="/" id="f-link" onClick={handleFahrClick}>
          Fahrenheit
        </a>
      </div>
    );
  }
  function handleFahrClick(event) {
    event.preventDefault();
    return (
      <div>
        <Unit met={"fahr"} />;
      </div>
    );
    return (
      <div className="unit">
        Unit:{" "}
        <a href="/" id="celsius-link" onClick={handleCelsiusClick}>
          Celsius
        </a>{" "}
        | <span>Fahrenheit</span>
      </div>
    );
  }

  return (
    <div className="unit">
      Unit: <span>Celsius</span> |{" "}
      <a href="/" id="f-link" onClick={handleFahrClick}>
        Fahrenheit
      </a>
    </div>
  );
}
