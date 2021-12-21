import React from "react";
import Search from "./Search";
import { ForecastProvider } from "./ForecastDayContext";

export default function Weather() {
  return (
    <div>
      <ForecastProvider>
        <Search defaultCity="Tel Aviv" />
      </ForecastProvider>
    </div>
  );
}
