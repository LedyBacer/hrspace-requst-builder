import React, { useEffect, useState } from "react";
import { Radio, RadioGroup } from "@mui/material";
import styles from "./reward-radio.module.scss";
/* eslint-disable react/prop-types, react-hooks/exhaustive-deps */

function RewardRadioContainer({
  selectedRewardContainerStyle,
  text,
  helperText,
  id,
}) {
  return (
    <div
      style={selectedRewardContainerStyle[id]}
      className={styles.reward_contaier_option}
    >
      <div className={styles.radio_container}>
        <Radio
          value={id}
          color="rqback"
          name="rewardRadio"
          sx={{ padding: 0 }}
        />
        <p className={styles.radio_container_text}>{text}</p>
      </div>
      <p className={styles.reward_text}>{helperText}</p>
    </div>
  );
}

export default function RewardRadio({ formik }) {
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
    formik.setFieldValue("rewardRadio", event.target.value);
  };

  const radioData = [
    {
      id: 0,
      text: "100% за выход сотрудника",
      helperText: "Повысит шансы на отклик от «звёздных» рекрутеров с опытом.",
    },
    {
      id: 1,
      text: "50% за выход + 50% после 1 месяца работы",
      helperText: "1 месяц — это гарантийный период (испытательный срок).",
    },
    {
      id: 2,
      text: "100% по окончании 1 месяца работы",
      helperText:
        "За такие заявки берутся реже всего — рекрутер рискует не получить оплату.",
    },
  ];

  useEffect(() => {
    const event = {
      target: {
        value: formik.values.rewardRadio,
      },
    };
    handleChange(event);
  }, []);

  return (
    <RadioGroup
      aria-labelledby="RewardRadio"
      value={formik.values.rewardRadio}
      name="rewardRadio"
      onChange={handleChange}
    >
      <div className={styles.reward_container}>
        {radioData.map((item) => (
          <RewardRadioContainer
            selectedRewardContainerStyle={selectedRewardContainerStyle}
            id={item.id}
            key={item.id}
            text={item.text}
            helperText={item.helperText}
          />
        ))}
      </div>
    </RadioGroup>
  );
}
