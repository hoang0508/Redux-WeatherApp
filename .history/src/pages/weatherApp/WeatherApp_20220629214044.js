import React from "react";
import "./WeatherApp.scss";
import WeatherLayout from "../../modules/WeatherLayout";
const WeatherApp = () => {
  return (
    <div
      className="weather"
      style={{ backgroundImage: 'url("./weather.jpg")' }}
    >
      <div className="weather-app">
        <WeatherLayout />
      </div>
    </div>
  );
};

export default WeatherApp;
