import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModal(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.isOpen = action.payload;
    },
  },
});

export const { handleModal } = modalSlice.actions;

export default modalSlice.reducer;
