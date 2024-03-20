import React, { useState } from "react";
import { Button, IconButton, Radio, TextField } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useNavigate } from "react-router-dom";
import styles from "./request-creator2.module.scss";
import { ReactComponent as HintIMG1 } from "../../images/2first_hint_image.svg";
import { ReactComponent as HintIMG2 } from "../../images/2second_hint_image.svg";

function RewardRadio() {
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

function RewardField() {
  return (
    <div className={styles.reward_field_container}>
      <div className={styles.reward_field_container_textfield_container}>
        <TextField
          id="outlined-number"
          type="number"
          label="Введите сумму"
          color="rqback"
          sx={{
            "& .MuiInputBase-root": {
              height: "48px",
              width: "357px",
              borderRadius: "8px",
            },
          }}
        />
        <p className={styles.ruble}>₽</p>
      </div>
      <div className={styles.reward_hit_container}>
        <p className={styles.reward_hit_text}>
          По статистике первые резюме с такой ценой в такой профобласти будут
          через две недели. Хотите раньше? Повысьте ценник на 10000.
        </p>
      </div>
      <div>
        <p className={styles.recomendation}>
          Рекомендуемая сумма вознаграждения — среднемесячный доход кандидата и
          выше
        </p>
        <p className={`${styles.recomendation} ${styles.salary_recomendation}`}>
          от 70000 до 100000₽ — средняя зарплата для выбранной позиции
        </p>
      </div>
    </div>
  );
}

function HintImages() {
  return (
    <div className={styles.hint_images_container}>
      <div className={styles.hint_image_container}>
        <div className={styles.hint_image_container_image}>
          <HintIMG1 />
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

function Navigation() {
  const navigate = useNavigate();
  return (
    <div className={styles.navigation}>
      <div className={styles.bookmark}>
        <IconButton aria-label="bookmark" color="rqback" sx={{ padding: "0" }}>
          <BookmarkBorderOutlinedIcon />
          <p className={styles.bookmark_text}>Сохранить черновик</p>
        </IconButton>
      </div>
      <div className={styles.navigation_button_container}>
        <Button
          onClick={() => {
            navigate("/request-builder/1");
          }}
          variant="contained"
          color="rqwhite"
          sx={{
            height: "46px",
            width: "180px",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          <p className={styles.button_text}>Назад</p>
        </Button>
        <Button
          onClick={() => {
            navigate("/request-builder/3");
          }}
          variant="contained"
          color="rqback"
          sx={{
            height: "46px",
            width: "180px",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          <p className={styles.button_text}>Далее</p>
        </Button>
      </div>
    </div>
  );
}

function RequestCreator2() {
  return (
    <div className={styles.container}>
      <h2 className={styles.reward_text_header}>Выплата HR</h2>
      <RewardRadio />
      <h2 className={`${styles.reward_text_header} ${styles.mt32}`}>
        Вознаграждение HR за сотрудника
      </h2>
      <RewardField />
      <HintImages />
      <Navigation />
    </div>
  );
}

export default RequestCreator2;
