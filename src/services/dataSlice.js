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
  requestedData: {
    specialization: {
      id: 0,
      name: "Программисты",
    },
    salary: {
      min: 50000,
      max: 70000,
    },
    responsibilities: [
      {
        id: 0,
        name: "Разработка пользовательских интерфейсов для мобильных приложений с учетом лучших практик UX/UI дизайна.",
      },
      {
        id: 1,
        name: "Создание прототипов, макетов и дизайн-систем.",
      },
      {
        id: 2,
        name: "Исследование и анализ потребностей пользователей, проведение тестирования итераций дизайна.",
      },
    ],
    requirements: [
      {
        id: 0,
        name: "Высшее образование в области дизайна",
      },
      {
        id: 1,
        name: "Опыт работы от 2 лет в области UX/UI дизайна мобильных приложений.",
      },
      {
        id: 2,
        name: "Знание основ разработки мобильных приложений и понимание их технических ограничений.",
      },
    ],
    conditions: [
      {
        id: 313,
        name: "Оформление по ТК РФ",
      },
      {
        id: 133,
        name: "ДМС",
      },
      {
        id: 12,
        name: "обустроенный офис",
      },
      {
        id: 3,
        name: "гибкий график",
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
