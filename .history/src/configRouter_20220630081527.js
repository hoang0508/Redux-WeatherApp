import React from "react";
import { Routes, Route } from "react-router-dom";
import WeatherApp from "./pages/weatherApp/WeatherApp";

const configRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherApp />}></Route>
    </Routes>
  );
};

export default configRouter;
