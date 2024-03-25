import { createSlice } from "@reduxjs/toolkit";
import { request } from "../api/api";
import transformData from "../components/utils/transform-specialistion-data";

export const initialState = {
  test: [],
  isLoading: false,
  // baseData: {
  //   vacancyNames: [
  //     {
  //       id: 1,
  //       name: "Мидл фронтенд разработчик",
  //     },
  //     {
  //       id: 2,
  //       name: "Бэкендер",
  //     },
  //     {
  //       id: 3,
  //       name: "Фронтендер",
  //     },
  //   ],
  //   specialisations: [
  //     {
  //       id: 1,
  //       name: "Административный персонал",
  //     },
  //     {
  //       id: 2,
  //       name: "Программисты",
  //     },
  //   ],
  //   specialisationNames: [
  //     {
  //       id: 1,
  //       name: "Курьер",
  //       specialisationsId: 1,
  //     },
  //     {
  //       id: 2,
  //       name: "Администратор",
  //       specialisationsId: 1,
  //     },
  //     {
  //       id: 3,
  //       name: "Фронтендер",
  //       specialisationsId: 2,
  //     },
  //     {
  //       id: 4,
  //       name: "Бэкендер",
  //       specialisationsId: 2,
  //     },
  //   ],
  //   citys: [
  //     {
  //       id: 1,
  //       name: "Москва",
  //     },
  //     {
  //       id: 2,
  //       name: "Питер",
  //     },
  //   ],
  // },
  // requestedData: {
  //   specialization: {
  //     id: 0,
  //     name: "Программисты",
  //   },
  //   salary: {
  //     min: 0,
  //     max: 70000,
  //   },
  //   responsibilities: [
  //     {
  //       id: 0,
  //       name: "Разработка пользовательских интерфейсов для мобильных приложений с учетом лучших практик UX/UI дизайна.",
  //     },
  //     {
  //       id: 1,
  //       name: "Создание прототипов, макетов и дизайн-систем.",
  //     },
  //     {
  //       id: 2,
  //       name: "Исследование и анализ потребностей пользователей, проведение тестирования итераций дизайна.",
  //     },
  //   ],
  //   requirements: [
  //     {
  //       id: 0,
  //       name: "Высшее образование в области дизайна",
  //     },
  //     {
  //       id: 1,
  //       name: "Опыт работы от 2 лет в области UX/UI дизайна мобильных приложений.",
  //     },
  //     {
  //       id: 2,
  //       name: "Знание основ разработки мобильных приложений и понимание их технических ограничений.",
  //     },
  //   ],
  //   conditions: [
  //     {
  //       id: 313,
  //       name: "Оформление по ТК РФ",
  //     },
  //     {
  //       id: 133,
  //       name: "ДМС",
  //     },
  //     {
  //       id: 12,
  //       name: "обустроенный офис",
  //     },
  //     {
  //       id: 3,
  //       name: "гибкий график",
  //     },
  //   ],
  // },
  baseData: {
    vacancyNames: [],
    specialisations: [],
    specialisationNames: [],
    citys: [],
  },
  requestedData: {
    specialization: {},
    salary: {
      min: undefined,
      max: undefined,
    },
    responsibilities: [],
    requirements: [],
    conditions: [],
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
    handleLoading(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = action.payload;
    },
    handleCity(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.baseData.citys = action.payload;
    },
    handleVacancyNames(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.baseData.vacancyNames = action.payload;
    },
    handleCategories(state, action) {
      const temp = transformData(action.payload);
      // eslint-disable-next-line no-param-reassign
      state.baseData.specialisations = temp.specialisations;
      // eslint-disable-next-line no-param-reassign
      state.baseData.specialisationNames = temp.specialisationNames;
    },
    handleRequiredData(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.requestedData.conditions = action.payload.conditions;
      // eslint-disable-next-line no-param-reassign
      state.requestedData.requirements = action.payload.requirements;
      // eslint-disable-next-line no-param-reassign
      state.requestedData.responsibilities = action.payload.responsibilities;
      // eslint-disable-next-line no-param-reassign
      state.requestedData.salary = action.payload.salary;
    },
    handleRequiredFromSpecData(state, action) {
      // eslint-disable-next-line no-param-reassign
      // state.requestedData.conditions = action.payload?.conditions;
      // eslint-disable-next-line no-param-reassign
      state.requestedData.requirements = action.payload.requirements;
      // eslint-disable-next-line no-param-reassign
      state.requestedData.responsibilities = action.payload.responsibilities;
      // eslint-disable-next-line no-param-reassign
      // state.requestedData.salary = action.payload?.salary;
    },
    handleClearRequiredData(state) {
      // eslint-disable-next-line no-param-reassign
      state.requestedData = initialState.requestedData;
    },
    handleClearSalaryData(state) {
      // eslint-disable-next-line no-param-reassign
      state.requestedData.salary = initialState.requestedData.salary;
    },
  },
});

export const { handleTest, handleClearRequiredData, handleClearSalaryData } =
  dataSlice.actions;

export default dataSlice.reducer;

export function getCityRequest() {
  return function (dispatch) {
    dispatch(dataSlice.actions.handleLoading(true));

    request("/hrspace/cities")
      .then((res) => {
        if (res) {
          dispatch(dataSlice.actions.handleCity(res));
        }
      })
      .catch((err) => {
        // dispatch(dataSlice.actions.handleError());
        console.error(err);
      });

    dispatch(dataSlice.actions.handleLoading(false));
  };
}

export function getVacancyNamesRequest() {
  return function (dispatch) {
    dispatch(dataSlice.actions.handleLoading(true));

    request("/hrspace/vacancy_names")
      .then((res) => {
        if (res) {
          dispatch(dataSlice.actions.handleVacancyNames(res));
        }
      })
      .catch((err) => {
        // dispatch(dataSlice.actions.handleError());
        console.error(err);
      });

    dispatch(dataSlice.actions.handleLoading(false));
  };
}

export function getCategoriesRequest() {
  return function (dispatch) {
    dispatch(dataSlice.actions.handleLoading(true));

    request("/hrspace/categories")
      .then((res) => {
        if (res) {
          dispatch(dataSlice.actions.handleCategories(res));
        }
      })
      .catch((err) => {
        // dispatch(dataSlice.actions.handleError());
        console.error(err);
      });

    dispatch(dataSlice.actions.handleLoading(false));
  };
}

export function getRequiredDataRequest(values) {
  return function (dispatch) {
    // dispatch(dataSlice.actions.handleLoading(true));

    request(
      `/hrspace/data/?vacancy_name_id=${values.vacancyNameFieldId}&city_id=${values.cityId}`,
    )
      .then((res) => {
        if (res) {
          dispatch(dataSlice.actions.handleRequiredData(res));
        }
      })
      .catch((err) => {
        // dispatch(dataSlice.actions.handleError());
        console.error(err);
      });

    // dispatch(dataSlice.actions.handleLoading(false));
  };
}

export function getRequiredDataFromSpecRequest(values) {
  return function (dispatch) {
    // dispatch(dataSlice.actions.handleLoading(true));

    request(`/hrspace/specializations/${values.specId}`)
      .then((res) => {
        if (res) {
          dispatch(dataSlice.actions.handleRequiredFromSpecData(res));
        }
      })
      .catch((err) => {
        // dispatch(dataSlice.actions.handleError());
        console.error(err);
      });

    // dispatch(dataSlice.actions.handleLoading(false));
  };
}

export function formDataPost(values) {
  return function () {
    // dispatch(dataSlice.actions.handleLoading(true));

    request(`/hrspace/vacancy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(() => {})
      .catch((err) => {
        // dispatch(dataSlice.actions.handleError());
        console.error(err);
      });

    // dispatch(dataSlice.actions.handleLoading(false));
  };
}
