/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Button } from "@mui/material";
import styles from "./failure-window.scss";

function FailureWindow() {
  return (
    <div className={styles.container}>
      <div className={styles.successPicture} />
      <div className={styles.containerForText}>
        <h2 className={styles.h2}>Не удалось оформить заявку</h2>
        <p className={styles.paragraph}>
          К сожалению, оплата не прошла. Повторите попытку или обратитесь
          в техподдержку.
        </p>
      </div>
      <Button
        variant="contained"
        color="rqback"
        sx={{
          height: "46px",
          width: "180px",
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        <p className={styles.button_text}>К оплате</p>
      </Button>
    </div>
  );
}

export default FailureWindow;
