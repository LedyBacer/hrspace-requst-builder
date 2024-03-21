import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Navigation } from "@mui/icons-material";
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

function RequestCreator() {
  const validationSchema = yup.object({
    vacancyNameField: yup.lazy((value) => {
      switch (typeof value) {
        case "object":
          return yup.object().required(); // schema for object
        case "string":
          return yup.string().min(3).max(64).required(); // schema for string
        default:
          return yup.mixed().required();
      }
    }),
    specialisationField: yup.object().required(),
    cityField: yup.object().required(),
    salaryFromField: yup
      .number()
      .positive()
      .min(1000)
      .max(1000000000)
      .integer()
      .required(),
    salaryToField: yup
      .number()
      .positive()
      .min(1000)
      .max(1000000000)
      .integer()
      .required(),
  });

  const formik = useFormik({
    initialValues: {
      vacancyNameField: "",
      specialisationField: "",
      grade: "",
      expirience: "",
      cityField: "",
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
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

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
        <Navigation />
      </form>
    </div>
  );
}

export default RequestCreator;
