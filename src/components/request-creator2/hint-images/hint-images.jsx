import React from "react";
import styles from "./hint-images.module.scss";
import HintIMG1 from "../../../images/2first_hint_image.png";
import { ReactComponent as HintIMG2 } from "../../../images/2second_hint_image.svg";

export default function HintImages() {
  return (
    <div className={styles.hint_images_container}>
      <div className={styles.hint_image_container}>
        <div className={styles.hint_image_container_image}>
          <img src={HintIMG1} alt="Hint" />
        </div>
        <p className={styles.hint_image_container_text}>
          Рекрутер связывается с работодателем, который одобрил его. Уточняет
          детали заявки и начинает над ней работу.
        </p>
      </div>
      <div className={styles.hint_image_container}>
        <div className={styles.hint_image_container_image}>
          <HintIMG2 />
        </div>
        <p className={styles.hint_image_container_text}>
          Работа заключается в публикации вакансии, её верном оформлении,
          прозвоне кандидатов, активном поиске по базе.
        </p>
      </div>
    </div>
  );
}
