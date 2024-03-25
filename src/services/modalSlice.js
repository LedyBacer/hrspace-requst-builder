import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isOpen: false,
  isSuccess: false,
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
  },
});

export const { handleModal, handleSuccess } = modalSlice.actions;

export default modalSlice.reducer;
