import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  formState: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveFormState(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.formState = action.payload;
    },
  },
});

export const { saveFormState } = formSlice.actions;

export default formSlice.reducer;
