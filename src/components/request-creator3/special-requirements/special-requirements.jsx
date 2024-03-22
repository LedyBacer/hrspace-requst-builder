import { TextField } from "@mui/material";
import React from "react";
import styles from "./special-requirements.module.scss";

export default function SpecialRequirements() {
  return (
    <div className={`${styles.additional_tasks_header} ${styles.mt32}`}>
      <h2 className={styles.text_header}>
        Есть ли у вас особые требования к рекрутерам?
      </h2>
      <p className={styles.special_requirements_hint}>
        Например особые навыки, дополнительные задачи, стоп-лист.
      </p>
      <div className={styles.textfield_large}>
        <TextField
          id="requirements"
          label="Если пожеланий нет, оставьте поле пустым"
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
