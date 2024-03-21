import { FormControlLabel, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./requirements.module.scss";
import { ThemedCheckbox } from "../../../ui/ui";

export default function Requirements() {
  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Требования</h3>
      <div className={styles.checkbox_container}>
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
          label={
            <Typography className={styles.formControlLabel}>
              Высшее образование в области дизайна
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
          label={
            <Typography className={styles.formControlLabel}>
              Опыт работы от 2 лет в области UX/UI дизайна мобильных приложений.
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
          label={
            <Typography className={styles.formControlLabel}>
              Глубокие знания принципов UX/UI дизайна и его методологий, а также
              умение применять их на практике.
            </Typography>
          }
        />
      </div>
      <p className={styles.description}>Свое описание</p>
      <div className={styles.textfield_large}>
        <TextField
          id="requirements"
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
