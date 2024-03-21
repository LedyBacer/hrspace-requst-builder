import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  test: false,
  baseData: {
    vacancyNames: [
      {
        id: 1,
        name: "Мидл фронтенд разработчик",
      },
      {
        id: 2,
        name: "Бэкендер",
      },
      {
        id: 3,
        name: "Фронтендер",
      },
    ],
    specialisations: [
      {
        id: 1,
        name: "Административный персонал",
      },
      {
        id: 2,
        name: "Программисты",
      },
    ],
    specialisationNames: [
      {
        id: 1,
        name: "Курьер",
        specialisationsId: 1,
      },
      {
        id: 2,
        name: "Администратор",
        specialisationsId: 1,
      },
      {
        id: 3,
        name: "Фронтендер",
        specialisationsId: 2,
      },
      {
        id: 4,
        name: "Бэкендер",
        specialisationsId: 2,
      },
    ],
    citys: [
      {
        id: 1,
        name: "Москва",
      },
      {
        id: 2,
        name: "Питер",
      },
    ],
  },
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
