import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getData } from "./redux/weather/weatherSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const data = useSelector((state) => state.weather.data);
  return <></>;
}

export default App;
