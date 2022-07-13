import { combineReducers } from "@reduxjs/toolkit";
import weatherSlice from "./weather/weatherSlice";

export const reducer = combineReducers({
  weather: weatherSlice,
});
