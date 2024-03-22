import React, { useEffect, useState } from "react";
import { Radio, RadioGroup } from "@mui/material";
import styles from "./what-need-radio.module.scss";
/* eslint-disable react/prop-types, react-hooks/exhaustive-deps */

function WhatNeedRadioContainer({
  selectedRewardContainerStyle,
  text,
  helperText,
  id,
}) {
  return (
    <div
      style={selectedRewardContainerStyle[id]}
      className={styles.what_need_contaier_option}
    >
      <div className={styles.radio_container}>
        <Radio
          value={id}
          color="rqback"
          name="whatNeedRadio"
          sx={{ padding: 0 }}
        />
        <p className={styles.what_need_container_text}>{text}</p>
      </div>
      <p className={styles.what_need_text}>{helperText}</p>
    </div>
  );
}

export default function WhatNeedRadio({ formik }) {
  const [selectedRewardContainerStyle, setSelectedStyle] = useState([
    {},
    {},
    {},
  ]);

  const handleChange = (event) => {
    const selectedStyle = {
      border: "2px solid black",
      backgroundColor: "#F2F5FA",
    };
    const tmpRStyle = [{}, {}, {}];
    tmpRStyle[event.target.value] = selectedStyle;
    setSelectedStyle(tmpRStyle);
    formik.setFieldValue("whatNeedRadio", event.target.value);
  };

  const radioData = [
    {
      id: 0,
      text: "Только резюме",
      helperText: "Без предварительного собеседования",
    },
    {
      id: 1,
      text: "Резюме + результаты собеседования",
      helperText: "Рекрутер проведёт предварительный отбор",
    },
  ];

  useEffect(() => {
    const event = {
      target: {
        value: formik.values.whatNeedRadio,
      },
    };
    handleChange(event);
  }, []);

  return (
    <div className={`${styles.additional_tasks_header} ${styles.mt32}`}>
      <h2 className={styles.text_header}>Что предоставить?</h2>
      <RadioGroup
        aria-labelledby="whatNeedRadio"
        value={formik.values.whatNeedRadio}
        name="whatNeedRadio"
        onChange={handleChange}
      >
        <div className={styles.what_need_container}>
          {radioData.map((item) => (
            <WhatNeedRadioContainer
              selectedRewardContainerStyle={selectedRewardContainerStyle}
              id={item.id}
              key={item.id}
              text={item.text}
              helperText={item.helperText}
            />
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
