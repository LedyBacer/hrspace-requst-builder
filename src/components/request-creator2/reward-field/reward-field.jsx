import { TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./reward-field.module.scss";

/* eslint-disable react/prop-types */
export default function RewardField({ formik }) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const salaryData = useSelector((state) => state.data.requestedData.salary);

  return (
    <div className={styles.reward_field_container}>
      <div className={styles.reward_field_container_textfield_container}>
        <TextField
          id="rewardField"
          name="rewardField"
          type="number"
          label="Введите сумму"
          color="rqback"
          sx={{
            "& .MuiInputBase-root": {
              height: "48px",
              width: "357px",
              borderRadius: "8px",
            },
          }}
          value={formik.values.rewardField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.rewardField && Boolean(formik.errors.rewardField)
          }
          helperText={formik.touched.rewardField && formik.errors.rewardField}
        />
        <p className={styles.ruble}>₽</p>
      </div>
      <div className={styles.reward_hit_container}>
        {formik.values.rewardField < salaryData.min ? (
          <p className={styles.reward_hit_text}>
            По статистике первые резюме с такой ценой в такой профобласти будут
            через две недели. Хотите раньше? Повысьте ценник на{" "}
            {salaryData.min - formik.values.rewardField}.
          </p>
        ) : (
          <p />
        )}
      </div>
      <div>
        <p className={styles.recomendation}>
          Рекомендуемая сумма вознаграждения — среднемесячный доход кандидата и
          выше.
        </p>
        {salaryData.min ? (
          <p
            className={`${styles.recomendation} ${styles.salary_recomendation}`}
          >
            от {salaryData.min} до {salaryData.max} ₽ — средняя зарплата для
            выбранной позиции.
          </p>
        ) : (
          <p
            className={`${styles.recomendation} ${styles.salary_recomendation}`}
          />
        )}
      </div>
    </div>
  );
}
