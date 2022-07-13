import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";
import { FaAudible, FaTemperatureHigh } from "react-icons/fa";
import { BsSun, BsFillSunsetFill } from "react-icons/bs";
import { WiSunset, WiHumidity } from "react-icons/wi";
import { AiFillEye } from "react-icons/ai";
const WeatherTodayStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  .weather-info {
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 4px;
    padding: 5px;
    &--image {
      margin-bottom: 10px;
      font-size: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .color-sun {
        color: #f4d03f;
      }
      .color-wind {
        color: #26a0da;
      }
    }
    &--sun {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 20px;
      .sun-icon {
        font-size: 20px;
        color: #f4d03f;
      }
    }
    span {
      font-size: 20px;
      font-weight: 400;
      text-align: center;
      display: block;
    }
  }
`;

const WeatherToday = () => {
  // const { weatherData } = useWeatherContext();
  // if (!weatherData?.current) return;
  // const { uvi, wind_speed, humidity, visibility, sunrise, sunset, pressure } =
  //   weatherData?.current;

  return (
    <></>
    // <WeatherTodayStyled>
    //   <div className="weather-info">
    //     <h3 className="weather-info--name">UV index</h3>
    //     <div className="weather-info--image">
    //       <BsSun className="color-sun" />
    //     </div>
    //     <span>{uvi}</span>
    //   </div>
    //   <div className="weather-info">
    //     <h3 className="weather-info--name">Wind status</h3>
    //     <div className="weather-info--image">
    //       <FaAudible className="color-wind" />
    //     </div>
    //     <span>{wind_speed}km/h</span>
    //   </div>

    //   <div className="weather-info">
    //     <h3 className="weather-info--name">Sunsrice & Sunset</h3>
    //     <div className="weather-info--sun">
    //       <BsFillSunsetFill className="sun-icon" />
    //       <span>{new Date(sunrise * 1000).toLocaleTimeString()}</span>
    //     </div>
    //     <div className="weather-info--sun">
    //       <WiSunset className="sun-icon" />
    //       <span>{new Date(sunset * 1000).toLocaleTimeString()}</span>
    //     </div>
    //   </div>

    //   <div className="weather-info">
    //     <h3 className="weather-info--name">Humidity</h3>
    //     <div className="weather-info--image">
    //       <WiHumidity className="color-wind" />
    //     </div>
    //     <span>{humidity}%</span>
    //   </div>

    //   <div className="weather-info">
    //     <h3 className="weather-info--name">Visiblity</h3>
    //     <div className="weather-info--image">
    //       <AiFillEye className="color-sun" />
    //     </div>
    //     <span>{visibility}km</span>
    //   </div>

    //   <div className="weather-info">
    //     <h3 className="weather-info--name">Pressure</h3>
    //     <div className="weather-info--image">
    //       <FaTemperatureHigh className="color-wind" />
    //     </div>
    //     <span>{pressure} hPa</span>
    //   </div>
    // </WeatherTodayStyled>
  );
};

export default WeatherToday;
