import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import timeConverter from "../../config/configTime";
import LoadingSkeleton from "../../Loading/LoadingSkeleton";

const WeatherDetailsStyle = styled.div`
  margin-top: 30px;
  padding: 10px;
  display: flex;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  .details-left,
  .details-right {
    width: 50%;
  }
  .details-info {
    display: flex;
    align-items: baseline;
    gap: 0 10px;
    margin-bottom: 10px;
  }
  .info-name {
    color: #000;
    font-weight: 500;
    font-size: 17px;
  }
`;

const WeatherDetails = () => {
  const { dataDetails, isLoading } = useSelector((state) => state.weather);
  return (
    <>
      {isLoading && (
        <>
          <WeatherDetailsSkeleton></WeatherDetailsSkeleton>
        </>
      )}
      {!isLoading && (
        <WeatherDetailsStyle>
          <div className="details-left">
            <div className="details-info">
              {new Date(dataDetails?.dt * 1000).toLocaleDateString("vi-VN")},{" "}
              <span>{timeConverter(dataDetails?.dt)}</span>
            </div>
            <div className="details-info">
              <div className="info-name">Temperature:</div>
              <div>
                <span>
                  {Math.floor(dataDetails?.temp?.min)}
                  <sup>o</sup>C
                </span>
                -
                <span>
                  {Math.floor(dataDetails?.temp?.max)}
                  <sup>o</sup>C
                </span>
              </div>
            </div>
            <div className="details-info">
              <div className="info-name">Rain:</div>
              <div>{dataDetails?.rain} mml</div>
            </div>
            <div className="details-info">
              <div className="info-name">Humidity:</div>
              <div>{dataDetails?.humidity} %</div>
            </div>
            <div className="details-info">
              <div className="info-name">Wind speed:</div>
              <div>{dataDetails?.wind_speed} km/h</div>
            </div>
          </div>
          <div className="details-right">
            <div className="details-info">
              <div className="info-name">Sunrice:</div>
              <div>
                {new Date(dataDetails?.sunrise * 1000).toLocaleTimeString()}
              </div>
            </div>
            <div className="details-info">
              <div className="info-name">Sunset:</div>
              <div>
                {new Date(dataDetails?.sunset * 1000).toLocaleTimeString()}
              </div>
            </div>
            <div className="details-info">
              <div className="info-name">Description:</div>
              <div>{dataDetails?.weather[0]?.description}</div>
            </div>
            <div className="details-info">
              <div className="info-name">Pressure:</div>
              <div>{dataDetails?.pressure} hPa</div>
            </div>
          </div>
        </WeatherDetailsStyle>
      )}
    </>
  );
};

const WeatherDetailsSkeleton = () => {
  return (
    <>
      <WeatherDetailsStyle>
        <div className="details-left">
          <div className="details-info">
            <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            <span>
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </span>
          </div>
          <div className="details-info">
            <div className="info-name">
              {" "}
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
            <div>
              <span>
                <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
              </span>

              <span>
                <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
              </span>
            </div>
          </div>
          <div className="details-info">
            <div className="info-name">
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
            <div>
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
          </div>
          <div className="details-info">
            <div className="info-name">
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
            <div>
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
          </div>
          <div className="details-info">
            <div className="info-name">
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
            <div>
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
          </div>
        </div>
        <div className="details-right">
          <div className="details-info">
            <div className="info-name">
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
            <div>
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
          </div>
          <div className="details-info">
            <div className="info-name">
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
            <div>
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
          </div>
          <div className="details-info">
            <div className="info-name">
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
            <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
          </div>
          <div className="details-info">
            <div className="info-name">
              {" "}
              <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
            </div>
            <LoadingSkeleton width="70px" height="20px"></LoadingSkeleton>
          </div>
        </div>
      </WeatherDetailsStyle>
    </>
  );
};

export default WeatherDetails;
