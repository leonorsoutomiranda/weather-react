import React from "react";
import { WiDaySunny } from "weather-icons-react";
import { WiThunderstorm } from "weather-icons-react";
import { WiSnowflakeCold } from "weather-icons-react";
import { WiFog } from "weather-icons-react";
import { WiDayRain } from "weather-icons-react";
import { WiDayShowers } from "weather-icons-react";
import { WiNightAltRain } from "weather-icons-react";
import { WiNightAltShowers } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiNightAltCloudy } from "weather-icons-react";
import { WiNightClear } from "weather-icons-react";
export default function WeatherIcon(props) {
  const iconMapping = {
    "01d": <WiDaySunny />,
    "02d": <WiDayCloudy />,
    "03d": <WiDayCloudy />,
    "04d": <WiDayCloudy />,
    "09d": <WiDayShowers />,
    "10d": <WiDayRain />,
    "11d": <WiThunderstorm />,
    "13d": <WiSnowflakeCold />,
    "50d": <WiFog />,
    "01n": <WiNightClear />,
    "02n": <WiNightAltCloudy />,
    "03n": <WiNightAltCloudy />,
    "04n": <WiNightAltCloudy />,
    "09n": <WiNightAltShowers />,
    "10n": <WiNightAltRain />,
    "11n": <WiThunderstorm />,
    "13n": <WiSnowflakeCold />,
    "50n": <WiFog />,
  };
  console.log(props.id);
  return <div className="icon">{iconMapping[props.id]}</div>;
}
