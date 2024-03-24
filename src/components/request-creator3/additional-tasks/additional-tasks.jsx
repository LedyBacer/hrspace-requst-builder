import { FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { Field, FormikProvider } from "formik";
import styles from "./additional-tasks.module.scss";
import { ThemedCheckbox } from "../../../ui/ui";
/* eslint-disable react/prop-types,  react/no-array-index-key */

function Task({ name, text }) {
  return (
    <FormControlLabel
      control={
        <Field name={name} type="checkbox" as={ThemedCheckbox} value={text} />
      }
      sx={{ margin: "0 0 0 -4px" }}
      label={
        <Typography className={styles.formControlLabel}>{text}</Typography>
      }
    />
  );
}

export default function AdditionalTasks({ formik }) {
  const taskData = [
    {
      id: 0,
      text: "тестирование кандидатов",
    },
    {
      id: 1,
      text: "предварительное собеседование",
    },
    {
      id: 2,
      text: "формирование отчёта по поиску",
    },
    {
      id: 3,
      text: "подготовка рекомендаций по онбордингу",
    },
  ];
  return (
    <FormikProvider value={formik}>
      <div className={`${styles.additional_tasks_header} ${styles.mt32}`}>
        <h2 className={styles.text_header}>Дополнительные задачи рекрутера</h2>
        <div className={styles.checkbox_container}>
          {taskData.map((item) => (
            <Task key={item.id} text={item.text} name="additionalTasks" />
          ))}
        </div>
      </div>
    </FormikProvider>
  );
}
