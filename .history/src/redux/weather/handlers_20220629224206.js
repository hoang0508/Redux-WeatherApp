import { put, call } from "redux-saga/effects";
import WeatherApi from "../../apis/WeatherApi";
import { setData, setQuery } from "./weatherSlice";

export default function* handleWeather({ type, payload }) {
  try {
    let position;
    if (payload) {
      position = yield call(WeatherApi.GET_LOC_BY_NAME, { q: payload });
      yield put(setQuery(""));
    } else {
      position = yield call(WeatherApi.GET_CURRENT_POSITION);
    }
    const dataWeather = yield call(WeatherApi.GET, {
      lat: position.lat,
      lon: position.lon,
    });
    yield put(setData(dataWeather));
  } catch (error) {
    console.log(error);
  }
}
