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
  if (props.icon === "01d") {
    return <WiDaySunny className="WeatherIcon" size={70} color="#000" />;
  }
  if (props.icon === "02d") {
    return <WiDayCloudy className="WeatherIcon" size={70} color="#000" />;
  }
  if (props.icon === "03d") {
    return <WiCloudy className="WeatherIcon" size={70} color="#000" />;
  }
  if (props.icon === "04d") {
    return <WiDayCloudyHigh className="WeatherIcon" size={70} color="#000" />;
  }
  if (props.icon === "09d") {
    return <WiDayShowers className="WeatherIcon" size={70} color="#000" />;
  }
  if (props.icon === "10d") {
    return <WiDayRain className="WeatherIcon" size={70} color="#000" />;
  }
  if (props.icon === "11d") {
    return <WiDayThunderstorm className="WeatherIcon" size={70} color="#000" />;
  }
  if (props.icon === "13d") {
    return <WiDaySnow className="WeatherIcon" size={70} color="#000" />;
  }
  if (props.icon === "50d") {
    return <WiDayFog className="WeatherIcon" size={70} color="#000" />;
  }
}
