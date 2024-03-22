import { FormControlLabel, Typography } from "@mui/material";
import React from "react";
import styles from "./additional-tasks.module.scss";
import { ThemedCheckbox } from "../../../ui/ui";

export default function AdditionalTasks() {
  return (
    <div className={`${styles.additional_tasks_header} ${styles.mt32}`}>
      <h2 className={styles.text_header}>Дополнительные задачи рекрутера</h2>
      <div className={styles.checkbox_container}>
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>
              тестирование кандидатов
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>
              предварительное собеседование
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>
              формирование отчёта по поиску
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>
              подготовка рекомендаций по онбордингу
            </Typography>
          }
        />
      </div>
    </div>
  );
}
