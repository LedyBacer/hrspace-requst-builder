/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Button } from "@mui/material";
import styles from "./success.module.scss";

function Success() {
  return (
    <div className={styles.container}>
      <div className={styles.successPicture} />
      <div className={styles.containerForText}>
        <h2 className={styles.h2}>Заявка оформлена!</h2>
        <p className={styles.paragraph}>
          Сумма поступила на ваш счёт и будет заморожена до закрытия заявки.{" "}
        </p>
        <p className={styles.paragraph}>
          Ваша заявка отправлена на модерацию. Вы можете отслеживать её статус
          в разделе «Мои заявки».
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
        <p className={styles.button_text}>Мои заявки</p>
      </Button>
    </div>
  );
}

export default Success;
