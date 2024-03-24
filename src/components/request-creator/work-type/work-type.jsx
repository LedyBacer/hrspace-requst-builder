import { FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { Field, FormikProvider } from "formik";
import styles from "./work-type.module.scss";
import { ThemedCheckbox } from "../../../ui/ui";
/* eslint-disable react/prop-types */
export default function WorkType({ formik }) {
  return (
    <FormikProvider value={formik}>
      <div className={styles.work_type_container}>
        <FormControlLabel
          control={
            <Field
              name="worktype"
              type="checkbox"
              as={ThemedCheckbox}
              value="удалённая работа"
            />
          }
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>
              удалённая работа
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Field
              name="worktype"
              type="checkbox"
              as={ThemedCheckbox}
              value="офис"
            />
          }
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>офис</Typography>
          }
        />
        <FormControlLabel
          control={
            <Field
              name="worktype"
              type="checkbox"
              as={ThemedCheckbox}
              value="гибрид"
            />
          }
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>гибрид</Typography>
          }
        />
      </div>
    </FormikProvider>
  );
}
