import React from "react";
import styles from "./request-creator.module.scss";

function RequestCreator() {
  const [showGrade, setShowGrade] = React.useState(false);
  const [showExperience, setShowExperience] = React.useState(false);

  return (
    <div className={styles.container}>
      <p>Название вакансии</p>
      <input />
      <p>Профессия</p>
      <input />
      {showGrade ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <p onClick={() => setShowGrade(false)}>- Грейд</p>
          <p>junior middle sinior lead</p>
        </>
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <p onClick={() => setShowGrade(true)}>+ Грейд</p>
      )}
      {showExperience ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <p onClick={() => setShowExperience(false)}>- Опыт работы</p>
          <p>неважно нет опыта 1-3 года 3-6 лет</p>
        </>
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <p onClick={() => setShowExperience(true)}>+ Опыт работы</p>
      )}
      <p>Город</p>
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
