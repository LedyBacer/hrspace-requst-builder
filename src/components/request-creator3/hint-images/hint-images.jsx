import React from "react";
import styles from "./hint-images.module.scss";
import { ReactComponent as HintIMG1 } from "../../../images/3first_hint_image.svg";
import { ReactComponent as HintIMG2 } from "../../../images/3second_hint_image.svg";

export default function HintImages() {
  return (
    <div className={styles.hint_images_container}>
      <div className={styles.hint_image_container}>
        <div className={styles.hint_image_container_image}>
          <HintIMG1 />
        </div>
        <p className={styles.hint_image_container_text}>
          Одобрение подходящего рекрутера не гарантирует, что нужный сотрудник
          найдётся в указанный срок. Однако с рекрутером поиск пройдёт гораздо
          быстрее и легче.
        </p>
      </div>
      <div className={styles.hint_image_container}>
        <div className={styles.hint_image_container_image}>
          <HintIMG2 />
        </div>
        <p className={styles.hint_image_container_text}>
          Наши специалисты хорошо знают рынок и смогут подобрать достойных
          кандидатов.
          <br />
          Это существенно сэкономит ваше время
          <br />и ресурсы.
        </p>
      </div>
    </div>
  );
}
