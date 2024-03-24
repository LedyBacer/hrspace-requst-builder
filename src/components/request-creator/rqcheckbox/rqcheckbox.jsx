import { Field, FormikProvider } from "formik";
import { FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { ThemedCheckbox } from "../../../ui/ui";
import styles from "./rqcheckbox.module.scss";

/* eslint-disable react/prop-types */
export default function RQCheckbox({ id, text, formik, name }) {
  return (
    <FormikProvider value={formik}>
      <FormControlLabel
        control={
          <Field
            name={name}
            type="checkbox"
            as={ThemedCheckbox}
            value={id.toString()}
          />
        }
        sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
        label={
          <Typography className={styles.formControlLabel}>{text}</Typography>
        }
      />
    </FormikProvider>
  );
}
