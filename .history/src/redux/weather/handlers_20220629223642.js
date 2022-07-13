import { put, call } from "redux-saga/effects";
import WeatherApi from "../../apis/WeatherApi";
import { setData } from "./weatherSlice";

export default function* handleWeather(action) {
  console.log(
    "🚀 ~ file: handlers.js ~ line 6 ~ function*handleWeather ~ action",
    action
  );
  try {
    const position = yield call(WeatherApi.GET_CURRENT_POSITION);
    const dataWeather = yield call(WeatherApi.GET, {
      lat: position.lat,
      lon: position.lon,
    });
    yield put(setData(dataWeather));
  } catch (error) {
    console.log(error);
  }
}
