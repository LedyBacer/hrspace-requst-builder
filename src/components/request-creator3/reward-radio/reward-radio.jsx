import React, { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Radio } from "@mui/material";
import styles from "./reward-radio.module.scss";

export default function RewardRadio() {
  const [isHintActive, setHintActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const selectedStyle = {
    border: "2px solid black",
    backgroundColor: "#F2F5FA",
  };
  const radioStyle = {
    a: {},
    b: {},
    c: {},
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
      <div className={styles.reward_container}>
        <div
          style={selectedRewardContainerStyle.a}
          className={styles.reward_contaier_option}
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
            <div className={styles.radio_container_container_text}>
              <p className={styles.radio_container_text}>Срочно</p>
              <p className={styles.reward_text}>В течение 1-2 недель</p>
            </div>
          </div>
        </div>
        <div
          style={selectedRewardContainerStyle.b}
          className={styles.reward_contaier_option}
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
            <div className={styles.radio_container_container_text}>
              <p className={styles.radio_container_text}>Не очень срочно</p>
              <p className={styles.reward_text}>В течение месяца</p>
            </div>
          </div>
        </div>
        <div
          style={selectedRewardContainerStyle.c}
          className={styles.reward_contaier_option}
        >
          <div className={styles.radio_container}>
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              color="rqback"
              value="c"
              sx={{ padding: 0 }}
              name="radio-buttons"
              inputProps={{ "aria-label": "C" }}
            />
            <div className={styles.radio_container_container_text}>
              <p className={styles.radio_container_text}>Времени достаточно</p>
              <p className={styles.reward_text}>В течение 2-х месяцев</p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.reward_hint_container}>
        По статистике площадки средний срок — 1 месяц.
      </p>
    </div>
  );
}
