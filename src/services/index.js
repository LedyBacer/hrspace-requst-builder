import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import modalSlice from "./modalSlice";

const rootReducer = combineReducers({
  data: dataSlice,
  modal: modalSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
