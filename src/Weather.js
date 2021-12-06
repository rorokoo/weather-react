import React from "react";
import Search from "./Search";
import MyLocation from "./MyLocation";
import City from "./City";
import Date from "./Date";
import Temp from "./Temp";
import MoreInfo from "./MoreInfo";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div>
      <Search />
      <MyLocation />
      <City />
      <Date />
      <Temp />
      <MoreInfo />
      <Forecast />
    </div>
  );
}
