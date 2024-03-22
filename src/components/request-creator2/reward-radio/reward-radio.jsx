import React, { useState } from "react";
import { Radio } from "@mui/material";
import styles from "./reward-radio.module.scss";

export default function RewardRadio() {
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
          <p className={styles.radio_container_text}>
            100% за выход сотрудника
          </p>
        </div>
        <p className={styles.reward_text}>
          Повысит шансы на отклик от «звёздных» рекрутеров с опытом.
        </p>
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
          <p className={styles.radio_container_text}>
            50% за выход + 50% после 1 месяца работы
          </p>
        </div>
        <p className={styles.reward_text}>
          1 месяц — это гарантийный период (испытательный срок).
        </p>
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
          <p className={styles.radio_container_text}>
            100% по окончании 1 месяца работы
          </p>
        </div>
        <p className={styles.reward_text}>
          За такие заявки берутся реже всего — рекрутер рискует не получить
          оплату.
        </p>
      </div>
    </div>
  );
}
