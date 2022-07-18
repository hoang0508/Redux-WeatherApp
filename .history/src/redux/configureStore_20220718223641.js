import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
// import logger from "redux-logger";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
