import "./Styling/MoreInfo.css";

export default function MoreInfo(props) {
  return (
    <ul className="info">
      <li>{props.description}</li>
      <li>wind: {Math.round(props.wind * 3.6)} km/h</li>
    </ul>
  );
}
