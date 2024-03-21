import { FormControlLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { Field, FormikProvider } from "formik";
import { useSelector } from "react-redux";
import styles from "./responsibilities.module.scss";
import { ThemedCheckbox } from "../../../ui/ui";
/* eslint-disable react/prop-types */

function Checkbox({ id, text, formik }) {
  return (
    <FormikProvider value={formik}>
      <FormControlLabel
        control={
          <Field
            name="responsibilitiesCheckboxes"
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

export default function Responsibilities({ formik }) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const responsibilitiesData = useSelector(
    (state) => state.data.requestedData.responsibilities,
  );

  return (
    <div className={styles.mt16}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Обязанности</h3>
      <div className={styles.checkbox_container}>
        {responsibilitiesData.map((item) => (
          <Checkbox
            id={item.id}
            text={item.name}
            key={item.id}
            formik={formik}
          />
        ))}
      </div>
      <p className={styles.description}>Свое описание</p>
      <div className={styles.textfield_large}>
        <TextField
          id="responsibilitiesField"
          name="responsibilitiesField"
          label="Опишите чем предстоит заниматься кандидату"
          multiline
          color="rqback"
          rows={4}
          value={formik.values.responsibilitiesField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.responsibilitiesField &&
            Boolean(formik.errors.responsibilitiesField)
          }
          helperText={
            formik.touched.responsibilitiesField &&
            formik.errors.responsibilitiesField
          }
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
