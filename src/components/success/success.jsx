/* eslint-disable no-irregular-whitespace */
import React from "react";
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
    </div>
  );
}

export default Success;
