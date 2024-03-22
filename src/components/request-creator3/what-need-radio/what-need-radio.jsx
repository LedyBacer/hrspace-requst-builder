import React, { useState } from "react";
import { Radio } from "@mui/material";
import styles from "./what-need-radio.module.scss";

export default function WhatNeedRadio() {
  const [selectedValue, setSelectedValue] = useState("");
  const selectedStyle = {
    border: "2px solid black",
    backgroundColor: "#F2F5FA",
  };
  const radioStyle = {
    a: {},
    b: {},
  };
  const [selectedRewardContainerStyle, setSelectedStyle] = useState(radioStyle);

  const handleChange = (event) => {
    const tmpRStyle = radioStyle;
    setSelectedStyle(tmpRStyle);
    tmpRStyle[event.target.value] = selectedStyle;
    setSelectedValue(event.target.value);
    setSelectedStyle(tmpRStyle);
  };

  return (
    <div className={`${styles.additional_tasks_header} ${styles.mt32}`}>
      <h2 className={styles.text_header}>Что предоставить?</h2>
      <div className={styles.what_need_container}>
        <div
          style={selectedRewardContainerStyle.a}
          className={styles.what_need_contaier_option}
        >
          <div className={styles.radio_container}>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              color="rqback"
              name="radio-buttons"
              sx={{ padding: 0 }}
              inputProps={{ "aria-label": "A" }}
            />
            <p className={styles.what_need_container_text}>Только резюме</p>
          </div>
          <p className={styles.what_need_text}>
            Без предварительного собеседования
          </p>
        </div>
        <div
          style={selectedRewardContainerStyle.b}
          className={styles.what_need_contaier_option}
        >
          <div className={styles.radio_container}>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              color="rqback"
              value="b"
              sx={{ padding: 0 }}
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
            <p className={styles.what_need_container_text}>
              Резюме + результаты собеседования
            </p>
          </div>
          <p className={styles.what_need_text}>
            Рекрутер проведёт предварительный отбор
          </p>
        </div>
      </div>
    </div>
  );
}
