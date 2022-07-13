import React from "react";
import { Routes, Route } from "react-router-dom";
import WeatherHours from "../components/hours/WeatherHours";
import WeatherToday from "../components/today/WeatherToday";
import WeatherWeek from "../components/week/WeatherWeek";
import WeatherApp from "../pages/weatherApp/WeatherApp";
const ConfigRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherApp />}>
        <Route path="/" element={<WeatherToday />}></Route>
        <Route path="/week" element={<WeatherWeek />}></Route>
        <Route path="/hour" element={<WeatherHours />}></Route>
      </Route>
    </Routes>
  );
};

export default ConfigRouter;
