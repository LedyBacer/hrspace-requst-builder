import { TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./requirements.module.scss";
import RQCheckbox from "../rqcheckbox/rqcheckbox";
/* eslint-disable react/prop-types */

export default function Requirements({ formik }) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const requirementsData = useSelector(
    (state) => state.data.requestedData.requirements,
  );
  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Требования</h3>
      <div className={styles.checkbox_container}>
        {requirementsData.map((item) => (
          <RQCheckbox
            id={item.id}
            text={item.name}
            key={item.id}
            formik={formik}
            name="requirementsCheckboxes"
          />
        ))}
      </div>
      <p className={styles.description}>Свое описание</p>
      <div className={styles.textfield_large}>
        <TextField
          id="requirementsField"
          name="requirementsField"
          value={formik.values.requirementsField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.requirementsField &&
            Boolean(formik.errors.requirementsField)
          }
          helperText={
            formik.touched.requirementsField && formik.errors.requirementsField
          }
          label="Опишите необходимые знания и навыки"
          multiline
          color="rqback"
          rows={4}
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
