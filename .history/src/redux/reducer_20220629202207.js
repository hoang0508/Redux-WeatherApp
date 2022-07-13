import { combineReducers } from "@reduxjs/toolkit";
import weatherSlice from "./weather/weatherSlice";

const reducer = combineReducers({
  weather: weatherSlice,
});
