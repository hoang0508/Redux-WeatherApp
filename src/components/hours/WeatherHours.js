import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";

const WeatherHours = () => {
  const { data } = useSelector((state) => state.weather);

  if (!data?.hourly) return;

  const dataTemp =
    data?.hourly &&
    data?.hourly.length > 0 &&
    data?.hourly.map((item) => {
      return item?.temp;
    });

  const dataFeel =
    data?.hourly &&
    data?.hourly.length > 0 &&
    data?.hourly.map((item) => {
      return item?.feels_like;
    });

  const dataTime =
    data?.hourly &&
    data?.hourly.length > 0 &&
    data?.hourly.map((item) => {
      return new Date(item?.dt * 1000).toLocaleTimeString();
    });

  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Weather chart",
    },
    xAxis: {
      categories: dataTime,
    },
    series: [
      {
        name: "Temp",
        data: dataTemp,
      },
      {
        name: "Feels-like",
        data: dataFeel,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default WeatherHours;
