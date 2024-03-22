import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  formState: {
    vacancyNameField: {
      id: -1,
      name: "casinoPlayer",
    },
    specialisationField: {
      id: -1,
      name: "blackJack",
      specialisation: "Административный персонал",
    },
    grade: "middle",
    expirience: "1-3 года",
    cityField: {
      id: -1,
      name: "тестовый город",
    },
    worktype: ["офис", "удаленка"],
    employment: "частичная",
    registrationType: "ИП",
    salaryFromField: "5000$",
    salaryToField: "6000$",
    responsibilitiesCheckboxes: ["1", "2"],
    responsibilitiesField:
      "Тестовый текст обязанностей lorem Тестовый текст обязанностей lorem Тестовый текст обязанностей lorem Тестовый текст",
    requirementsCheckboxes: ["0", "1"],
    requirementsField: "Тестовый текст требований",
    conditionsCheckbox: ["0", "1"],
    conditionsField: "Тестовый текст условий",
  },
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
