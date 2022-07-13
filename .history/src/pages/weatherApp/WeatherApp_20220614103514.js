import React from "react";
import "./WeatherApp.scss";
import WeatherLayout from "../../modules/WeatherLayout";
import { useWeatherContext } from "../../context/WeatherProvider";
const WeatherApp = () => {
  const { weatherData, handleSearchData } = useWeatherContext();
  return (
    <div
      className="weather"
      style={{ backgroundImage: 'url("./weather.jpg")' }}
    >
      <div className="weather-app">
        <WeatherLayout data={weatherData} onChange={handleSearchData} />
      </div>
    </div>
  );
};

export default WeatherApp;
