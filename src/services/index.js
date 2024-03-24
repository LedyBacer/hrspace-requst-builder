import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import modalSlice from "./modalSlice";
import formSlice from "./formSlice";

const rootReducer = combineReducers({
  data: dataSlice,
  modal: modalSlice,
  form: formSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
