import { put, call } from "redux-saga/effects";
import WeatherApi from "../../apis/WeatherApi";
import { setData } from "./weatherSlice";

export default function* handleWeather() {
  try {
    const position = yield call(WeatherApi.GET_CURRENT_POSITION());
    console.log(
      "🚀 ~ file: handlers.js ~ line 8 ~ function*handleWeather ~ position",
      position
    );
    const dataWeather = yield call(
      WeatherApi.GET({
        lat: position.lat,
        lon: position.lon,
      })
    );
    yield put(setData(dataWeather));
  } catch (error) {
    console.log(error);
  }
}
