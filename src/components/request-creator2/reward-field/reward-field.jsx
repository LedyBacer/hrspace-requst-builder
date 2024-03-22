import { TextField } from "@mui/material";
import React from "react";
import styles from "./reward-field.module.scss";

export default function RewardField() {
  return (
    <div className={styles.reward_field_container}>
      <div className={styles.reward_field_container_textfield_container}>
        <TextField
          id="outlined-number"
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
        />
        <p className={styles.ruble}>₽</p>
      </div>
      <div className={styles.reward_hit_container}>
        <p className={styles.reward_hit_text}>
          По статистике первые резюме с такой ценой в такой профобласти будут
          через две недели. Хотите раньше? Повысьте ценник на 10000.
        </p>
      </div>
      <div>
        <p className={styles.recomendation}>
          Рекомендуемая сумма вознаграждения — среднемесячный доход кандидата и
          выше
        </p>
        <p className={`${styles.recomendation} ${styles.salary_recomendation}`}>
          от 70000 до 100000₽ — средняя зарплата для выбранной позиции
        </p>
      </div>
    </div>
  );
}
