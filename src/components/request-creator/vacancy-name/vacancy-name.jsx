import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./vacancy-name.module.scss";
/* eslint-disable react/prop-types */

export default function VacancyName({ formik }) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const vacancyNameData = useSelector(
    (state) => state.data.baseData.vacancyNames,
  );

  return (
    <div className={styles.vacancy_name}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Название вакансии</h3>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Autocomplete
        id="vacancyNameField"
        name="vacancyNameField"
        freeSolo
        value={formik.values.vacancyNameField}
        onChange={(event, value, reason) => {
          if (reason === "selectOption") {
            formik.setFieldValue("vacancyNameField", value); // Обрабатывает случай, когда выбран вариант из списка
          }
        }}
        onInputChange={(event, value, reason) => {
          if (reason === "input") {
            formik.setFieldValue("vacancyNameField", { name: value }); // Обрабатывает случай ручного ввода
          }
        }}
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
          },
        }}
        options={vacancyNameData}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            error={
              formik.touched.vacancyNameField &&
              Boolean(formik.errors.vacancyNameField?.name)
            }
            helperText={
              formik.touched.vacancyNameField &&
              formik.errors.vacancyNameField?.name
            }
            onBlur={formik.handleBlur}
            color="rqback"
            size="small"
          />
        )}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        )}
      />
      {/* eslint-enable react/jsx-props-no-spreading */}
    </div>
  );
}
