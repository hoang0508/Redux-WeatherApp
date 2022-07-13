import { put, call } from "redux-saga/effects";
import WeatherApi from "../../apis/WeatherApi";
import { setData } from "./weatherSlice";

export default function* handleWeather() {
  try {
    const dataWeather = yield call(WeatherApi.GET());
    yield put(setData(dataWeather));
  } catch (error) {
    console.log(error);
  }
}
