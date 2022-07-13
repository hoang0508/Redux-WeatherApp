import React from "react";

const WeatherMain = ({ data, onChange }) => {
  return (
    <div className="weather-main">
      <h3 className="weather-heading">Weather App</h3>
      <div className="weather-search">
        <input
          type="text"
          className="weather-input"
          placeholder="Search..."
          onChange={onChange}
        />
      </div>
      <div className="weather-content">
        <div className="weather-date">
          <span>Date: {new Date().toLocaleString()} </span>
        </div>
        <div className="weather-national">
          <div className="weather-city">{data?.national?.city},</div>
          <div className="weather-country">{data?.national?.country}</div>
        </div>
        <div className="weather-forecast">
          <div className="weather-temp">
            <span className="weather-temp--number">
              {Math.trunc(data?.current?.temp)}
            </span>
            <span>
              <sup>o</sup>C
            </span>
          </div>
          <div className="weather-image">
            <img
              src={`https://openweathermap.org/img/wn/${data?.current?.weather[0]?.icon}.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="weather-main--img">
        <img src="./weather-img.jpg" alt="" />
      </div>
    </div>
  );
};

export default WeatherMain;
