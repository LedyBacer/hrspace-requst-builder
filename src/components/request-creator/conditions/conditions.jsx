import React from "react";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./conditions.module.scss";
import { ThemedToggleButton, ThemedToggleButtonGroup } from "../../../ui/ui";
/* eslint-disable react/prop-types */

function RQToggleButton({ text, name, value }) {
  return (
    <ThemedToggleButton name={name} value={value}>
      {text}
    </ThemedToggleButton>
  );
}

export default function Conditions({ formik }) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const conditionsData = useSelector(
    (state) => state.data.requestedData.conditions,
  );

  const handleToggle = (event, newValues) => {
    formik.setFieldValue("conditionsCheckbox", newValues);
  };

  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Условия</h3>
      <div className={styles.toggle_buttons}>
        <ThemedToggleButtonGroup
          name="conditionsCheckbox"
          value={formik.values.conditionsCheckbox}
          onChange={handleToggle}
          aria-label="choose conditions"
        >
          {conditionsData.map((item) => (
            <RQToggleButton
              text={item.name}
              key={item.id}
              name="conditionsCheckbox"
              value={item.id.toString()}
            />
          ))}
        </ThemedToggleButtonGroup>
      </div>
      <p className={styles.description}>Свое описание</p>
      <div className={styles.textfield_large}>
        <TextField
          id="conditionsField"
          name="conditionsField"
          value={formik.values.conditionsField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.conditionsField &&
            Boolean(formik.errors.conditionsField)
          }
          helperText={
            formik.touched.conditionsField && formik.errors.conditionsField
          }
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
