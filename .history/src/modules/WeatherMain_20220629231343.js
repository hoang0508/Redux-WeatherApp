import { debounce } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkeleton from "../Loading/LoadingSkeleton";
import { getData, setQuery } from "../redux/weather/weatherSlice";
const WeatherMain = () => {
  const dispatch = useDispatch();

  const { data, query, isLoading } = useSelector((state) => state.weather);
  console.log(
    "🚀 ~ file: WeatherMain.js ~ line 13 ~ WeatherMain ~ query",
    query
  );

  const handleSearchWeather = debounce((e) => {
    dispatch(setQuery(e.target.value));
  }, 500);

  useEffect(() => {
    dispatch(getData(query));
  }, [dispatch, query]);
  return (
    <div className="weather-main">
      <h3 className="weather-heading">Weather App</h3>
      <div className="weather-search">
        <input
          type="text"
          className="weather-input"
          placeholder="Search..."
          onChange={handleSearchWeather}
        />
      </div>
      {!isLoading && (
        <>
          <LoadingWeather></LoadingWeather>
        </>
      )}
      {!isLoading && (
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
      )}
      <div className="weather-main--img">
        <img src="./weather-img.jpg" alt="" />
      </div>
    </div>
  );
};

const LoadingWeather = () => {
  return (
    <div className="weather-content">
      <div className="weather-date">
        <span>Date: {new Date().toLocaleString()} </span>
      </div>
      <div className="weather-national">
        <div className="weather-city">
          <LoadingSkeleton width="100px" height="20px"></LoadingSkeleton>
        </div>
        <div className="weather-country">
          <LoadingSkeleton width="50px" height="20px"></LoadingSkeleton>
        </div>
      </div>
      <div className="weather-forecast">
        <div className="weather-temp">
          <span className="weather-temp--number">
            <LoadingSkeleton width="50px" height="30px"></LoadingSkeleton>
          </span>
          <span>
            <sup>o</sup>C
          </span>
        </div>
        <div className="weather-image">
          <LoadingSkeleton width="100%" height="100%"></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};

export default WeatherMain;
