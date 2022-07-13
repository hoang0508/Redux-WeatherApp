import React from "react";
import { Routes, Route } from "react-router-dom";
import WeatherToday from "../components/today/WeatherToday";
import WeatherApp from "../pages/weatherApp/WeatherApp";
const ConfigRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherApp />}>
        <Route path="/" element={<WeatherToday />}></Route>
      </Route>
    </Routes>
  );
};

export default ConfigRouter;
