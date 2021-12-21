import React, { useState, createContext } from "react";

export const ForecastDayContext = createContext();

export function ForecastProvider(props) {
  const [unit, setUnit] = useState("celsius");

  return (
    <ForecastDayContext.Provider value={[unit, setUnit]}>
      {props.children}
    </ForecastDayContext.Provider>
  );
}
