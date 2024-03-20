import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";
import { ReactComponent as MinusIcon } from "../../images/minus.svg";
import styles from "./request-creator.module.scss";
import { ThemedCheckbox, ThemedToggleButton } from "../../ui/ui";

function Grade() {
  const [showGrade, setShowGrade] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showGrade ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
          <div
            className={styles.spoiler_text_container}
            onClick={() => setShowGrade(false)}
          >
            <h3 className={`${styles.text_h3} ${styles.mr8}`}>Грейд</h3>
            <MinusIcon />
          </div>
          <div className={`${styles.toggle_buttons} ${styles.mt12}`}>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              junior
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              middle
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              senior
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              lead
            </ThemedToggleButton>
          </div>
        </>
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          className={styles.spoiler_text_container}
          onClick={() => setShowGrade(true)}
        >
          <PlusIcon />
          <h3 className={styles.spoiler_link}>Грейд</h3>
        </div>
      )}
    </>
  );
}

function Expirience() {
  const [showExperience, setShowExperience] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showExperience ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className={styles.spoiler_text_container}
            onClick={() => setShowExperience(false)}
          >
            <h3 className={`${styles.text_h3} ${styles.mr8}`}>Опыт работы</h3>
            <MinusIcon />
          </div>
          <div className={`${styles.toggle_buttons} ${styles.mt12}`}>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              неважно
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              нет опыта
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              1-3 года
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              3-6 лет
            </ThemedToggleButton>
          </div>
        </>
      ) : (
        /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */
        <div
          className={styles.spoiler_text_container}
          onClick={() => setShowExperience(true)}
        >
          <PlusIcon />
          <h3 className={styles.spoiler_link}>Опыт работы</h3>
        </div>
      )}
    </>
  );
}

function VacancyName() {
  const data = [
    { title: "Мидл фронтенд разработчик" },
    { title: "Лид бекенд разработчик" },
    { title: "UI/UX дизайнер" },
  ];
  return (
    <div className={styles.vacancy_name}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Название вакансии</h3>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
          },
        }}
        options={data.map((option) => option.title)}
        renderInput={(params) => (
          <TextField color="rqback" {...params} size="small" />
        )}
      />
      {/* eslint-enable react/jsx-props-no-spreading */}
    </div>
  );
}

function Specialisation() {
  const data = [
    { title: "Курьер", specialisation: "Административный персонал" },
    { title: "Администратор", specialisation: "Административный персонал" },
    { title: "Фронтендер", specialisation: "Программисты" },
    { title: "Бэкендер", specialisation: "Программисты" },
  ];

  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Специализация</h3>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Autocomplete
        id="grouped-demo"
        options={data.sort(
          (a, b) => -b.specialisation.localeCompare(a.specialisation),
        )}
        groupBy={(option) => option.specialisation}
        getOptionLabel={(option) => option.title}
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
          },
        }}
        renderInput={(params) => <TextField color="rqback" {...params} />}
      />
      {/* eslint-enable react/jsx-props-no-spreading */}
    </div>
  );
}

function City() {
  const data = [{ title: "Москва" }, { title: "Казань" }, { title: "Сочи" }];
  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Город</h3>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Autocomplete
        id="city"
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
          },
        }}
        options={data.map((option) => option.title)}
        renderInput={(params) => (
          <TextField color="rqback" {...params} size="small" />
        )}
      />
      {/* eslint-enable react/jsx-props-no-spreading */}
    </div>
  );
}

function WorkType() {
  return (
    <div className={styles.work_type_container}>
      <FormControlLabel
        control={<ThemedCheckbox />}
        sx={{ margin: "0 0 0 -4px" }}
        label={
          <Typography className={styles.formControlLabel}>
            удалённая работа
          </Typography>
        }
      />
      <FormControlLabel
        control={<ThemedCheckbox />}
        sx={{ margin: "0 0 0 -4px" }}
        label={
          <Typography className={styles.formControlLabel}>офис</Typography>
        }
      />
      <FormControlLabel
        control={<ThemedCheckbox />}
        sx={{ margin: "0 0 0 -4px" }}
        label={
          <Typography className={styles.formControlLabel}>гибрид</Typography>
        }
      />
    </div>
  );
}

function Employment() {
  const [showEmployment, setShowEmployment] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showEmployment ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
          <div
            className={styles.spoiler_text_container}
            onClick={() => setShowEmployment(false)}
          >
            <h3 className={`${styles.text_h3} ${styles.mr8}`}>Занятость</h3>
            <MinusIcon />
          </div>
          <div className={`${styles.toggle_buttons} ${styles.mt12}`}>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              полная занятость
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              частичная
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              посменно
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              другое
            </ThemedToggleButton>
          </div>
        </>
      ) : (
        /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */
        <div
          className={styles.spoiler_text_container}
          onClick={() => setShowEmployment(true)}
        >
          <PlusIcon />
          <h3 className={styles.spoiler_link}>Занятость</h3>
        </div>
      )}
    </>
  );
}

function RegistrationType() {
  const [showRegistrationType, setShowRegistrationType] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showRegistrationType ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
          <div
            className={styles.spoiler_text_container}
            onClick={() => setShowRegistrationType(false)}
          >
            <h3 className={`${styles.text_h3} ${styles.mr8}`}>
              Тип оформления
            </h3>
            <MinusIcon />
          </div>
          <div className={`${styles.toggle_buttons} ${styles.mt12}`}>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              ТК РФ
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              ИП
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              самозанятость
            </ThemedToggleButton>
            <ThemedToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              ГПХ
            </ThemedToggleButton>
          </div>
        </>
      ) : (
        /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */
        <div
          className={styles.spoiler_text_container}
          onClick={() => setShowRegistrationType(true)}
        >
          <PlusIcon />
          <h3 className={styles.spoiler_link}>Тип оформления</h3>
        </div>
      )}
    </>
  );
}

function Salary() {
  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>
        Зарплата gross (до вычета налога)
      </h3>
      <div className={styles.salary}>
        <TextField
          id="outlined-number"
          type="number"
          label="от"
          color="rqback"
          sx={{
            "& .MuiInputBase-root": {
              height: "48px",
              width: "211px",
              borderRadius: "8px",
            },
          }}
        />
        <TextField
          id="outlined-number2"
          type="number"
          label="до"
          color="rqback"
          sx={{
            "& .MuiInputBase-root": {
              height: "48px",
              width: "211px",
              borderRadius: "8px",
            },
          }}
        />
        <p className={styles.ruble}>₽</p>
      </div>
      <p className={styles.salary_expectations}>
        от 70000 до 100000 ₽ - средняя зарплата для этой позиции в выбранном
        регионе
      </p>
    </div>
  );
}

function Responsibilities() {
  return (
    <div className={styles.mt16}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Обязанности</h3>
      <div className={styles.checkbox_container}>
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
          label={
            <Typography className={styles.formControlLabel}>
              Разработка пользовательских интерфейсов для мобильных приложений с
              учетом лучших практик UX/UI дизайна.
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
          label={
            <Typography className={styles.formControlLabel}>
              Создание прототипов, макетов и дизайн-систем
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
          color="rqback"
          label={
            <Typography className={styles.formControlLabel}>
              Исследование и анализ потребностей пользователей, проведение
              тестирования итераций дизайна.
            </Typography>
          }
        />
      </div>
      <p className={styles.description}>Свое описание</p>
      <div className={styles.textfield_large}>
        <TextField
          id="requirements"
          label="Опишите чем предстоит заниматься кандидату"
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

function Requirements() {
  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Требования</h3>
      <div className={styles.checkbox_container}>
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
          label={
            <Typography className={styles.formControlLabel}>
              Высшее образование в области дизайна
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
          label={
            <Typography className={styles.formControlLabel}>
              Опыт работы от 2 лет в области UX/UI дизайна мобильных приложений.
            </Typography>
          }
        />
        <FormControlLabel
          control={<ThemedCheckbox />}
          sx={{ margin: "0 0 0 -4px", alignItems: "start" }}
          label={
            <Typography className={styles.formControlLabel}>
              Глубокие знания принципов UX/UI дизайна и его методологий, а также
              умение применять их на практике.
            </Typography>
          }
        />
      </div>
      <p className={styles.description}>Свое описание</p>
      <div className={styles.textfield_large}>
        <TextField
          id="requirements"
          label="Опишите необходимые знания и навыки"
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

function Conditions() {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Условия</h3>
      <div className={styles.toggle_buttons}>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          оформление по ТК РФ
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          ДМС
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          обустроенный офис
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
        <ThemedToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          гибкий график
        </ThemedToggleButton>
      </div>
      <p className={styles.description}>Свое описание</p>
      <div className={styles.textfield_large}>
        <TextField
          id="requirements"
          label="Расскажите об условиях работы"
          multiline
          rows={4}
          color="rqback"
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
      <Button
        onClick={() => {
          navigate("/request-builder/2");
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
  );
}

function RequestCreator() {
  return (
    <div className={styles.container}>
      <h2 className={styles.text_h2}>Создание заявки</h2>
      <VacancyName />
      <Specialisation />
      <Grade />
      <Expirience />
      <City />
      <WorkType />
      <Employment />
      <RegistrationType />
      <Salary />
      <h2 className={`${styles.text_h2} ${styles.m32}`}>Описание вакансии</h2>
      <p className={styles.vacancy_description}>
        Ниже примерный список обязанностей, требований и условий. Отметьте то
        что касается вас и добавьте свои.
      </p>
      <Responsibilities />
      <Requirements />
      <Conditions />
      <Navigation />
    </div>
  );
}

export default RequestCreator;
