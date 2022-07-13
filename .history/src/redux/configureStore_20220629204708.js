import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

export default store;
