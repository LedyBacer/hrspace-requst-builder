import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const rootReducer = combineReducers({
  data: dataSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
