import React from "react";
import { Outlet } from "react-router";
import WeatherMenu from "../components/menu/WeatherMenu";
import WeatherMain from "./WeatherMain";

const WeatherLayout = () => {
  return (
    <>
      <WeatherMain></WeatherMain>
      <div className="weather-menu">
        <WeatherMenu />
        <div className="weather-children">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default WeatherLayout;
