import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  test: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    handleTest(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.test = action.payload;
    },
  },
});

export const { handleTest } = dataSlice.actions;

export default dataSlice.reducer;
