import React from "react";

import "./Styling/Search.css";

export default function Search() {
  return (
    <form className="search">
      <input className="searchBox" type="search" />
      <input className="searchButton" type="submit" value="Search" />
    </form>
  );
}
