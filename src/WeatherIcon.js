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
    "01d": <WiDaySunny className="WeatherIcon" size={70} color="#000" />,
    "02d": <WiDayCloudy className="WeatherIcon" size={70} color="#000" />,
    "03d": <WiCloudy className="WeatherIcon" size={70} color="#000" />,
    "04d": <WiDayCloudyHigh className="WeatherIcon" size={70} color="#000" />,
    "09d": <WiDayShowers className="WeatherIcon" size={70} color="#000" />,
    "10d": <WiDayRain className="WeatherIcon" size={70} color="#000" />,
    "11d": <WiDayThunderstorm className="WeatherIcon" size={70} color="#000" />,
    "13d": <WiDaySnow className="WeatherIcon" size={70} color="#000" />,
    "50d": <WiDayFog className="WeatherIcon" size={70} color="#000" />,
    "01n": <WiDaySunny size={70} color="#000" />,
    "02n": <WiDayCloudy size={70} color="#000" />,
    "03n": <WiCloudy className="WeatherIcon" size={70} color="#000" />,
    "04n": <WiDayCloudyHigh className="WeatherIcon" size={70} color="#000" />,
    "09n": <WiDayShowers className="WeatherIcon" size={70} color="#000" />,
    "10n": <WiDayRain className="WeatherIcon" size={70} color="#000" />,
    "11n": <WiDayThunderstorm className="WeatherIcon" size={70} color="#000" />,
    "13n": <WiDaySnow className="WeatherIcon" size={70} color="#000" />,
    "50n": <WiDayFog className="WeatherIcon" size={70} color="#000" />,
  };
  return codeMapping[props.icon];
}
