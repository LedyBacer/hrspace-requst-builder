import React from "react";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  TextField,
  ToggleButton,
} from "@mui/material";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";
import { ReactComponent as MinusIcon } from "../../images/minus.svg";
import styles from "./request-creator.module.scss";

function Grade() {
  const [showGrade, setShowGrade] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showGrade ? (
        <>
          <div className={styles.spoiler_text_container}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <h3 className={styles.text_h3} onClick={() => setShowGrade(false)}>
              Грейд
            </h3>
            <MinusIcon />
          </div>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            junior
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            middle
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            senior
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            lead
          </ToggleButton>
        </>
      ) : (
        <div className={styles.spoiler_text_container}>
          <PlusIcon />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <h3
            className={styles.spoiler_link}
            onClick={() => setShowGrade(true)}
          >
            Грейд
          </h3>
        </div>
      )}
    </>
  );
}

function Expirience() {
  const [showExperience, setShowExperience] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showExperience ? (
        <>
          <div className={styles.spoiler_text_container}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <h3
              className={styles.text_h3}
              onClick={() => setShowExperience(false)}
            >
              Опыт работы
            </h3>
            <MinusIcon />
          </div>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            неважно
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            нет опыта
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            1-3 года
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            3-6 лет
          </ToggleButton>
        </>
      ) : (
        <div className={styles.spoiler_text_container}>
          <PlusIcon />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <h3
            className={styles.spoiler_link}
            onClick={() => setShowExperience(true)}
          >
            Опыт работы
          </h3>
        </div>
      )}
    </>
  );
}

function VacancyName() {
  const data = [
    { title: "Мидл фронтенд разработчик" },
    { title: "Лид бекенд разработчик" },
    { title: "UI/UX дизайнер" },
  ];
  return (
    <div className={styles.vacancy_name}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Название вакансии</h3>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
          },
        }}
        options={data.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} size="small" />}
      />
      {/* eslint-enable react/jsx-props-no-spreading */}
    </div>
  );
}

function Specialisation() {
  const data = [
    { title: "Курьер", specialisation: "Административный персонал" },
    { title: "Администратор", specialisation: "Административный персонал" },
    { title: "Фронтендер", specialisation: "Программисты" },
    { title: "Бэкендер", specialisation: "Программисты" },
  ];

  return (
    <div className={styles.vacancy_name}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Специализация</h3>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Autocomplete
        id="grouped-demo"
        options={data.sort(
          (a, b) => -b.specialisation.localeCompare(a.specialisation),
        )}
        groupBy={(option) => option.specialisation}
        getOptionLabel={(option) => option.title}
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
          },
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      {/* eslint-enable react/jsx-props-no-spreading */}
    </div>
  );
}

function City() {
  const data = [{ title: "Москва" }, { title: "Казань" }, { title: "Сочи" }];
  return (
    <div className={styles.vacancy_name}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Город</h3>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Autocomplete
        id="city"
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
          },
        }}
        options={data.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} size="small" />}
      />
      {/* eslint-enable react/jsx-props-no-spreading */}
    </div>
  );
}

function WorkType() {
  return (
    <div>
      <FormControlLabel control={<Checkbox />} label="удалённая работа" />
      <FormControlLabel control={<Checkbox />} label="офис" />
      <FormControlLabel control={<Checkbox />} label="гибрид" />
    </div>
  );
}

function Employment() {
  const [showEmployment, setShowEmployment] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showEmployment ? (
        <>
          <div className={styles.spoiler_text_container}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <h3
              className={styles.text_h3}
              onClick={() => setShowEmployment(false)}
            >
              Занятость
            </h3>
            <MinusIcon />
          </div>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            полная занятость
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            частичная
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            посменно
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            другое
          </ToggleButton>
        </>
      ) : (
        <div className={styles.spoiler_text_container}>
          <PlusIcon />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <h3
            className={styles.spoiler_link}
            onClick={() => setShowEmployment(true)}
          >
            Занятость
          </h3>
        </div>
      )}
    </>
  );
}

function RegistrationType() {
  const [showRegistrationType, setShowRegistrationType] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showRegistrationType ? (
        <>
          <div className={styles.spoiler_text_container}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <h3
              className={styles.text_h3}
              onClick={() => setShowRegistrationType(false)}
            >
              Тип оформления
            </h3>
            <MinusIcon />
          </div>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            ТК РФ
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            ИП
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            самозанятость
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            ГПХ
          </ToggleButton>
        </>
      ) : (
        <div className={styles.spoiler_text_container}>
          <PlusIcon />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <h3
            className={styles.spoiler_link}
            onClick={() => setShowRegistrationType(true)}
          >
            Тип оформления
          </h3>
        </div>
      )}
    </>
  );
}

function Salary() {
  return (
    <div className={styles.vacancy_name}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>
        Зарплата gross (до вычета налога)
      </h3>
      <div className={styles.salary}>
        <TextField
          id="outlined-number"
          type="number"
          label="от"
          sx={{
            "& .MuiInputBase-root": {
              height: "48px",
              width: "211px",
              borderRadius: "8px",
            },
          }}
        />
        <TextField
          id="outlined-number2"
          type="number"
          label="до"
          sx={{
            "& .MuiInputBase-root": {
              height: "48px",
              width: "211px",
              borderRadius: "8px",
            },
          }}
        />
        <p className={styles.ruble}>₽</p>
      </div>
      <p className={styles.salary_expectations}>
        от 70000 до 100000 ₽ - средняя зарплата для этой позиции в выбранном
        регионе
      </p>
    </div>
  );
}

function Responsibilities() {
  return (
    <div className={styles.vacancy_name}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Обязанности</h3>
      <TextField
        id="responsibilities"
        label="Опишите чем предстоит заниматься кандидату"
        sx={{
          "& .MuiInputBase-root": {
            height: "128px",
            width: "521px",
            borderRadius: "8px",
          },
        }}
      />
    </div>
  );
}

function Requirements() {
  return (
    <div className={styles.vacancy_name}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Требования</h3>
      <TextField
        id="requirements"
        label="Опишите необходимые знания и навыки"
        sx={{
          "& .MuiInputBase-root": {
            height: "128px",
            width: "521px",
            borderRadius: "8px",
          },
        }}
      />
    </div>
  );
}

function Conditions() {
  return (
    <div className={styles.vacancy_name}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Условия</h3>
      <TextField
        id="сonditions"
        label="Расскажите об условиях работы"
        sx={{
          "& .MuiInputBase-root": {
            height: "128px",
            width: "521px",
            borderRadius: "8px",
          },
        }}
      />
    </div>
  );
}

function RequestCreator() {
  return (
    <div className={styles.container}>
      <h2 className={styles.text_h2}>Создание заявки</h2>
      <VacancyName />
      <Specialisation />
      <Grade />
      <Expirience />
      <City />
      <WorkType />
      <Employment />
      <RegistrationType />
      <Salary />
      <h2 className={styles.text_h2}>Описание вакансии</h2>
      <p className={styles.vacancy_description}>
        Ниже примерный список обязанностей, требований и условий. Отметьте то
        что касается вас и добавьте свои.
      </p>
      <Responsibilities />
      <Requirements />
      <Conditions />
    </div>
  );
}

export default RequestCreator;
