import React from "react";
import { Routes, Route } from "react-router-dom";
import WeatherApp from "./pages/weatherApp/WeatherApp";

const ConfigRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherApp />}></Route>
    </Routes>
  );
};

export default ConfigRouter;
