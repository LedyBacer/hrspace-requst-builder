import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";
import { ReactComponent as MinusIcon } from "../../images/minus.svg";
import styles from "./request-creator.module.scss";

function Grade() {
  const [showGrade, setShowGrade] = React.useState(false);

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

          <p>junior middle sinior lead</p>
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
          <p>неважно нет опыта 1-3 года 3-6 лет</p>
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

function RequestCreator() {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.text_h2}>Создание заявки</h2>

      <div className={styles.vacancy_name}>
        <h3 className={`${styles.text_h3} ${styles.m12}`}>Название вакансии</h3>
        {/* <input /> */}
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} />}
        />
        {/* eslint-enable react/jsx-props-no-spreading */}
      </div>
      <div className={styles.profession}>
        <h3 className={`${styles.text_h3} ${styles.m12}`}>Профессия</h3>
        <input />
      </div>

      <Grade />
      <Expirience />

      <h3 className={styles.text_h3}>Город</h3>
      <input />
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="checkbox" />
          удаленная работа
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="checkbox" />
          офис
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="checkbox" />
          гибрид
        </label>
      </div>
    </div>
  );
}

export default RequestCreator;
