import React, { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./request-creator.module.scss";
import { ThemedToggleButton } from "../../ui/ui";
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

function Conditions() {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Условия</h3>
      <div className={styles.toggle_buttons}>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          оформление по ТК РФ
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          ДМС
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          обустроенный офис
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
      </div>
      <p className={styles.description}>Свое описание</p>
      <div className={styles.textfield_large}>
        <TextField
          id="requirements"
          label="Расскажите об условиях работы"
          multiline
          rows={4}
          color="rqback"
          sx={{
            "& .MuiInputBase-root": {
              height: "128px",
              width: "521px",
              borderRadius: "8px",
            },
          }}
        />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.bookmark}>
        <IconButton aria-label="bookmark" color="rqback" sx={{ padding: "0" }}>
          <BookmarkBorderOutlinedIcon />
          <p className={styles.bookmark_text}>Сохранить черновик</p>
        </IconButton>
      </div>
      <Button
        variant="contained"
        color="rqback"
        type="submit"
        sx={{
          height: "46px",
          width: "180px",
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        <p className={styles.button_text}>Далее</p>
      </Button>
    </div>
  );
}

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
        <Conditions />
        <Navigation />
      </form>
    </div>
  );
}

export default RequestCreator;
