import React from "react";
import "./Styling/Search.css";
import MyLocation from "./MyLocation";
import Temp from "./Temp";
import City from "./City";
import Date from "./Date";
import MoreInfo from "./MoreInfo";
import Forecast from "./Forecast";

export default function Search() {
  return (
    <div>
      <form className="search">
        <input className="searchBox" type="search" />
        <input className="searchButton" type="submit" value="Search" />
      </form>
      <MyLocation />
      <City city="Tel Aviv" />
      <Date />
      <Temp temp={15} />
      <MoreInfo />
      <Forecast />
    </div>
  );
}
