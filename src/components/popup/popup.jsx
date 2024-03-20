import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./popup.module.scss";
import { handleModal } from "../../services/modalSlice";

function Popup() {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const isOpen = useSelector((state) => state.modal.isOpen);
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(handleModal(false));
  };

  React.useEffect(() => {
    function onEsc(evt) {
      if (evt.code === "Escape") {
        handleClose();
      }
    }
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  });

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.container_opened : ""}`}
    >
      <div className={styles.popup}>
        <div className={styles.block}>
          <h2 className={styles.h2}>Данные по вакансии</h2>
          <ul className={styles.unsortedList}>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Название</h3>
              <p className={styles.paragraph}> UI дизайнер</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Специализация</h3>
              <p className={styles.paragraph}>Дизайнер</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Город</h3>
              <p className={styles.paragraph}>Москва</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Зарплата gross</h3>
              <p className={styles.paragraph}>от 60000 до 90000</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Обязанности</h3>
              <p className={styles.paragraph}>
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Требования</h3>
              <p className={styles.paragraph}>
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Условия</h3>
              <p className={styles.paragraph}>
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <h2 className={styles.h2}>Условия сотрудничества</h2>
          <ul className={styles.unsortedList}>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Выплата HR</h3>
              <p className={styles.paragraph}>100%</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Вознаграждение HR</h3>
              <p className={styles.paragraph}>90000%</p>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <h2 className={styles.h2}>Пожелания к рекрутеру</h2>
          <ul className={styles.unsortedList}>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Количество сотрудников</h3>
              <p className={styles.paragraph}>1</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Количество рекрутеров</h3>
              <p className={styles.paragraph}>1%</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Когда должен выйти на работу?</h3>
              <p className={styles.paragraph}>Срочно%</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Дополнительные задачи рекрутера</h3>
              <p className={styles.paragraph}>
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra.%
              </p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Что предоставить</h3>
              <p className={styles.paragraph}>Только резюме%</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Особые требования</h3>
              <p className={styles.paragraph}>нет%</p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.h3}>Показывать информацию о компании</h3>
              <p className={styles.paragraph}>нет%</p>
            </li>
          </ul>
        </div>
        <div className={styles.wrapperForButtons}>
          <div className={styles.containerForBtn}>
            <Button
              variant="contained"
              color="rqwhite"
              onClick={() => handleClose()}
              sx={{
                height: "46px",
                width: "180px",
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              <p className={styles.button_text}>Назад</p>
            </Button>
          </div>

          <div className={styles.containerForBtn}>
            <Button
              variant="contained"
              color="rqback"
              onClick={() => {
                handleClose();
                navigate("/success");
              }}
              sx={{
                height: "46px",
                width: "180px",
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              <p className={styles.button_text}>К оплате</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
