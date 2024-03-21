import { TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./salary.module.scss";

/* eslint-disable react/prop-types */
export default function Salary({ formik }) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const salaryData = useSelector((state) => state.data.requestedData.salary);

  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>
        Зарплата gross (до вычета налога)
      </h3>
      <div className={styles.salary}>
        <TextField
          id="salaryFromField"
          name="salaryFromField"
          type="number"
          label="от"
          color="rqback"
          sx={{
            "& .MuiInputBase-root": {
              height: "48px",
              width: "211px",
              borderRadius: "8px",
            },
          }}
          value={formik.values.salaryFromField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.salaryFromField &&
            Boolean(formik.errors.salaryFromField)
          }
          helperText={
            formik.touched.salaryFromField && formik.errors.salaryFromField
          }
        />
        <TextField
          id="salaryToField"
          name="salaryToField"
          type="number"
          label="до"
          color="rqback"
          sx={{
            "& .MuiInputBase-root": {
              height: "48px",
              width: "211px",
              borderRadius: "8px",
            },
          }}
          value={formik.values.salaryToField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.salaryToField && Boolean(formik.errors.salaryToField)
          }
          helperText={
            formik.touched.salaryToField && formik.errors.salaryToField
          }
        />
        <p className={styles.ruble}>₽</p>
      </div>
      <p className={styles.salary_expectations}>
        от {salaryData.min} до {salaryData.max} ₽ - средняя зарплата для этой
        позиции в выбранном регионе
      </p>
    </div>
  );
}
