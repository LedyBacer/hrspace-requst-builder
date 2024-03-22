import React, { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import styles from "./recruiter-count.module.scss";
import { ThemedToggleButton } from "../../../ui/ui";
/* eslint-disable react/prop-types */

export default function RecruiterCount() {
  const [selected, setSelected] = useState(false);
  const [isHintActive, setHintActive] = useState(false);

  return (
    <div>
      <div
        className={`${styles.recruitercount_header} ${styles.mt32} ${styles.fixed}`}
      >
        <h2 className={styles.text_header}>Количество рекрутеров</h2>
        <div
          onMouseEnter={() => setHintActive(!isHintActive)}
          onMouseLeave={() => setHintActive(!isHintActive)}
        >
          <InfoOutlinedIcon
            color="rqblue"
            sx={{ width: "20px", height: "20px" }}
          />
        </div>
        {isHintActive ? (
          <div className={styles.recruitercount_hint}>
            <p className={styles.recruitercount_hint_text}>
              Вы можете подключить к поиску до 3-х рекрутеров. Оплату получит
              тот, кто быстрее закроет заявку.
            </p>
          </div>
        ) : (
          <p />
        )}
      </div>
      <div className={styles.toggle_buttons}>
        <ThemedToggleButton
          value="check"
          selected={selected}
          sx={{ width: "36px", height: "36px" }}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          1
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          sx={{ width: "36px", height: "36px" }}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          2
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          sx={{ width: "36px", height: "36px" }}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          3
        </ThemedToggleButton>
      </div>
    </div>
  );
}
