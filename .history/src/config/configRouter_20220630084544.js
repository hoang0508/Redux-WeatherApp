import React from "react";
import { Routes, Route } from "react-router-dom";
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
