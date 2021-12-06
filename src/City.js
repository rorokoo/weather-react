import "./Styling/City.css";

export default function City(props) {
  let city = props.city;

  return <h2 className="city">{city}</h2>;
}
