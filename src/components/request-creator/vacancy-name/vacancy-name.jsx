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
        onChange={(event, value) => {
          formik.setFieldValue("vacancyNameField", value);
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
            value={formik.values.vacancyNameField}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.vacancyNameField &&
              Boolean(formik.errors.vacancyNameField)
            }
            helperText={
              formik.touched.vacancyNameField && formik.errors.vacancyNameField
            }
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
