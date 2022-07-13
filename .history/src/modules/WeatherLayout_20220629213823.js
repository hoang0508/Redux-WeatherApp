import React from "react";
// import { Outlet } from "react-router";
import WeatherMain from "./WeatherMain";
// import WeatherMenu from "./WeatherMenu";

const WeatherLayout = () => {
  return (
    <>
      <WeatherMain></WeatherMain>
      {/* <div className="weather-menu">
        <WeatherMenu />
        <div className="weather-children">
          <Outlet />
        </div>
      </div> */}
    </>
  );
};

export default WeatherLayout;
