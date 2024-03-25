import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  formState: {
    // vacancyNameField: {
    //   id: -1,
    //   name: "Test",
    // },
    // specialisationField: {
    //   id: 2,
    //   title: "Администратор",
    //   specialisation: "Административный персонал",
    // },
    // grade: "middle",
    // expirience: "1-3 года",
    // cityField: {
    //   id: 1,
    //   name: "Москва",
    // },
    // worktype: ["офис", "удаленка"],
    // employment: "частичная",
    // registrationType: "ИП",
    // salaryFromField: 5000,
    // salaryToField: 6000,
    // responsibilitiesCheckboxes: ["0", "1"],
    // responsibilitiesField: "Тестовый текст",
    // requirementsCheckboxes: ["0", "1"],
    // requirementsField: "Тестовый текст",
    // conditionsCheckbox: ["3", "12"],
    // conditionsField: "Тестовый текст",
    // rewardRadio: 0,
    // rewardField: "",
    // employeeCountField: "",
    // recruiterCount: "",
    // rewardRadio3: 0,
    // whatNeedRadio: 0,
    // specialRequirementsField: "",
    // companyInfoSwitch: false,
    ///
    ///
    // vacancyNameField: {
    //   name: "",
    // },
    // specialisationField: {
    //   title: "",
    // },
    // cityField: {
    //   name: "",
    // },
    vacancyNameField: null,
    specialisationField: null,
    cityField: null,
    grade: "",
    expirience: "",
    worktype: [],
    employment: "",
    registrationType: "",
    salaryFromField: "",
    salaryToField: "",
    responsibilitiesCheckboxes: [],
    responsibilitiesField: "",
    requirementsCheckboxes: [],
    requirementsField: "",
    conditionsCheckbox: [],
    conditionsField: "",
    rewardRadio: 0,
    rewardField: "",
    employeeCountField: "",
    recruiterCount: "1",
    rewardRadio3: 0,
    additionalTasks: [],
    whatNeedRadio: 0,
    specialRequirementsField: "",
    companyInfoSwitch: false,
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
    clearForm(state) {
      // eslint-disable-next-line no-param-reassign
      state.formState = initialState.formState;
      console.log("test");
    },
  },
});

export const { saveFormState, clearForm } = formSlice.actions;

export default formSlice.reducer;
