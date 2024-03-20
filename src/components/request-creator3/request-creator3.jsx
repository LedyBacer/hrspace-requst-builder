import React, { useState } from "react";
import {
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import styles from "./request-creator3.module.scss";
import { ThemedCheckbox, ThemedToggleButton } from "../../ui/ui";
import { ReactComponent as HintIMG1 } from "../../images/3first_hint_image.svg";
import { ReactComponent as HintIMG2 } from "../../images/3second_hint_image.svg";

function EmployeeCount() {
  return (
    <div>
      <h2 className={styles.text_header}>Количество сотрудников</h2>
      <TextField
        id="outlined-number"
        type="number"
        color="rqback"
        defaultValue="1"
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
            margin: "12px 0 0 0",
          },
        }}
      />
    </div>
  );
}

function RecruiterCount() {
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

function RewardRadio() {
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

function HintImages() {
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

function AdditionalTasks() {
  return (
    <div className={`${styles.additional_tasks_header} ${styles.mt32}`}>
      <h2 className={styles.text_header}>Дополнительные задачи рекрутера</h2>
      <div className={styles.checkbox_container}>
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>
              тестирование кандидатов
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>
              предварительное собеседование
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>
              формирование отчёта по поиску
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px" }}
          label={
            <Typography className={styles.formControlLabel}>
              подготовка рекомендаций по онбордингу
            </Typography>
          }
        />
      </div>
    </div>
  );
}

function WhatNeedRadio() {
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

function SpecialRequirements() {
  return (
    <div className={`${styles.additional_tasks_header} ${styles.mt32}`}>
      <h2 className={styles.text_header}>
        Есть ли у вас особые требования к рекрутерам?
      </h2>
      <p className={styles.special_requirements_hint}>
        Например особые навыки, дополнительные задачи, стоп-лист.
      </p>
      <div className={styles.textfield_large}>
        <TextField
          id="requirements"
          label="Если пожеланий нет, оставьте поле пустым"
          multiline
          color="rqback"
          rows={4}
          sx={{
            "& .MuiInputBase-root": {
              height: "128px",
              width: "521px",
              borderRadius: "8px",
            },
          }}
        />
      </div>
    </div>
  );
}

function CompanyInfo() {
  return (
    <div className={`${styles.company_info_header} ${styles.mt32}`}>
      <h2 className={styles.text_header}>Показывать информацию о компании</h2>
      <Switch inputProps={{ "aria-label": "test" }} color="rqback" />
    </div>
  );
}

function Navigation() {
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

function RequestCreator3() {
  return (
    <div className={styles.container}>
      <EmployeeCount />
      <RecruiterCount />
      <RewardRadio />
      <HintImages />
      <AdditionalTasks />
      <WhatNeedRadio />
      <SpecialRequirements />
      <CompanyInfo />
      <Navigation />
    </div>
  );
}

export default RequestCreator3;
