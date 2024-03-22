import React, { useEffect, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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
          name="rewardRadio3"
          sx={{ padding: 0 }}
        />
        <div className={styles.radio_container_container_text}>
          <p className={styles.radio_container_text}>{text}</p>
          <p className={styles.reward_text}>{helperText}</p>
        </div>
      </div>
    </div>
  );
}

export default function RewardRadio({ formik }) {
  const [isHintActive, setHintActive] = useState(false);
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
    formik.setFieldValue("rewardRadio3", event.target.value);
  };

  const radioData = [
    {
      id: 0,
      text: "Срочно",
      helperText: "В течение 1-2 недель",
    },
    {
      id: 1,
      text: "Не очень срочно",
      helperText: "В течение месяца",
    },
    {
      id: 2,
      text: "Времени достаточно",
      helperText: "В течение 2-х месяцев",
    },
  ];

  useEffect(() => {
    const event = {
      target: {
        value: formik.values.rewardRadio3,
      },
    };
    handleChange(event);
  }, []);

  return (
    <div>
      <div
        className={`${styles.recruitercount_header} ${styles.mt32} ${styles.fixed}`}
      >
        <h2 className={styles.text_header}>
          Когда сотрудник должен выйти на работу?
        </h2>
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
          <div className={styles.reward_radio_hint}>
            <p className={styles.recruitercount_hint_text}>
              Рекрутеры увидят ваши пожелания и смогут оценить свои возможности.
            </p>
          </div>
        ) : (
          <p />
        )}
      </div>
      <RadioGroup
        aria-labelledby="rewardRadio3"
        value={formik.values.rewardRadio3}
        name="rewardRadio3"
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
      <p className={styles.reward_hint_container}>
        По статистике площадки средний срок — 1 месяц.
      </p>
    </div>
  );
}
