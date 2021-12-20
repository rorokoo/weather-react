import "./Styling/Temp.css";
import { WiDaySunny } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiDayCloudyHigh } from "weather-icons-react";
import { WiDayShowers } from "weather-icons-react";
import { WiDayRain } from "weather-icons-react";
import { WiDayThunderstorm } from "weather-icons-react";
import { WiDaySnow } from "weather-icons-react";
import { WiDayFog } from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <WiDaySunny size={props.size} />,
    "02d": <WiDayCloudy size={props.size} />,
    "03d": <WiCloudy size={props.size} />,
    "04d": <WiDayCloudyHigh size={props.size} />,
    "09d": <WiDayShowers size={props.size} />,
    "10d": <WiDayRain size={props.size} />,
    "11d": <WiDayThunderstorm size={props.size} />,
    "13d": <WiDaySnow size={props.size} />,
    "50d": <WiDayFog size={props.size} />,
    "01n": <WiDaySunny size={props.size} />,
    "02n": <WiDayCloudy size={props.size} />,
    "03n": <WiCloudy size={props.size} />,
    "04n": <WiDayCloudyHigh size={props.size} />,
    "09n": <WiDayShowers size={props.size} />,
    "10n": <WiDayRain size={props.size} />,
    "11n": <WiDayThunderstorm size={props.size} />,
    "13n": <WiDaySnow size={props.size} />,
    "50n": <WiDayFog />,
  };
  return codeMapping[props.icon];
}
