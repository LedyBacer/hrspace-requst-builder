import { TextField } from "@mui/material";
import React from "react";
import styles from "./employee-count.module.scss";
/* eslint-disable react/prop-types */

export default function EmployeeCount({ formik }) {
  return (
    <div>
      <h2 className={styles.text_header}>Количество сотрудников</h2>
      <TextField
        id="employeeCountField"
        name="employeeCountField"
        type="number"
        color="rqback"
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
            margin: "12px 0 0 0",
          },
        }}
        value={formik.values.employeeCountField}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.employeeCountField &&
          Boolean(formik.errors.employeeCountField)
        }
        helperText={
          formik.touched.employeeCountField && formik.errors.employeeCountField
        }
      />
    </div>
  );
}
