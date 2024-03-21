import React from "react";
import styles from "./request-creator.module.scss";
import VacancyName from "./vacancy-name/vacancy-name";
import Specialisation from "./specialisation/specialisation";
import Grade from "./grade/grade";
import Expirience from "./expirience/expirience";
import City from "./city/city";
import WorkType from "./work-type/work-type";
import Employment from "./employment/employment";
import RegistrationType from "./registration-type/registration-type";
import Salary from "./salary/salary";
import Responsibilities from "./responsibilities/responsibilities";
import Requirements from "./requirements/requirements";
import Conditions from "./conditions/conditions";
import NavigationButtons from "./navigation/navigation";
/* eslint-disable react/prop-types */
function RequestCreator({ formik }) {
  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <h2 className={styles.text_h2}>Создание заявки</h2>
        <VacancyName formik={formik} />
        <Specialisation formik={formik} />
        <Grade formik={formik} />
        <Expirience formik={formik} />
        <City formik={formik} />
        <WorkType formik={formik} />
        <Employment formik={formik} />
        <RegistrationType formik={formik} />
        <Salary formik={formik} />
        <h2 className={`${styles.text_h2} ${styles.m32}`}>Описание вакансии</h2>
        <p className={styles.vacancy_description}>
          Ниже примерный список обязанностей, требований и условий. Отметьте то
          что касается вас и добавьте свои.
        </p>
        <Responsibilities formik={formik} />
        <Requirements formik={formik} />
        <Conditions formik={formik} />
        <NavigationButtons />
      </form>
    </div>
  );
}

export default RequestCreator;
