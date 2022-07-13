import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import timeConverter from "../../config/configTime";

const WeatherWeekStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  .weather-week--info {
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
  }
  .weather-week--image {
    display: flex;
    justify-content: center;
    height: 60px;
    pointer-events: none;
  }
  .weather-week--temp {
    display: flex;
    justify-content: center;
    gap: 0 10px;
    font-weight: 600;
    color: #ff8008;
    pointer-events: none;
  }
  .weather-week--days {
    font-size: 16px;
    pointer-events: none;
    span {
      color: #ff8008;
    }
  }
  .weather-week--bg {
    width: 100%;
    height: auto;
    background-color: RGBA(100, 149, 237, 1);
  }
`;

const WeatherWeek = () => {
  const { data } = useSelector((state) => state.weather);
  if (!data?.daily) return null;

  const dataWeek = data?.daily;
  return (
    <>
      <WeatherWeekStyles>
        {dataWeek &&
          dataWeek.length > 0 &&
          dataWeek.map((item) => (
            <div
              // className={`${
              //   item?.dt === dataDetails?.dt ? "weather-week--bg" : ""
              // } weather-week--info`}
              key={item?.dt}
              // onClick={() => handleWeekDetails(item)}
            >
              <h3 className="weather-week--days">
                {new Date(item?.dt * 1000).toLocaleDateString("vi-VN")},{" "}
                <span>{timeConverter(item?.dt)}</span>
              </h3>
              <div className="weather-week--image">
                <img
                  src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}.png`}
                  alt=""
                />
              </div>
              <div className="weather-week--temp">
                <span>
                  {Math.floor(item?.temp?.min)}
                  <sup>o</sup>C
                </span>
                -
                <span>
                  {Math.floor(item?.temp?.max)}
                  <sup>o</sup>C
                </span>
              </div>
            </div>
          ))}
      </WeatherWeekStyles>
      {/* <WeatherDetails data={dataDetails} /> */}
    </>
  );
};

export default WeatherWeek;
