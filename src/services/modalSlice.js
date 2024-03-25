import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isOpen: false,
  isSuccess: false,
  isError: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModal(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.isOpen = action.payload;
    },
    handleSuccess(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.isSuccess = action.payload;
    },
    handleError(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.isSuccess = action.payload;
    },
  },
});

export const { handleModal, handleSuccess, handleError } = modalSlice.actions;

export default modalSlice.reducer;
