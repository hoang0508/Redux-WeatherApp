import { takeLatest } from "redux-saga/effects";
import handleWeather from "./handlers";
import { getData } from "./weatherSlice";
export default function* weatherSaga() {
  yield takeLatest(getData.type, handleWeather);
}
