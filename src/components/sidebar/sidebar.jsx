import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./sidebar.module.scss";

function Sidebar() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className={styles.container}>
      <div className={styles.successWindow}>
        <div className={styles.decorateLine} />
        <NavLink
          to="/request-builder/1"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.link_active : ""}`
          }
        >
          {currentRoute === "/request-builder/1" ? (
            <div className={styles.containerForIcon_active}>
              <div className={styles.checklistIcon_active} />
            </div>
          ) : (
            <div className={styles.containerForIcon_inactive}>
              <div className={styles.checklistIcon_inactive} />
            </div>
          )}
          Данные по вакансии
        </NavLink>
        <NavLink
          to="/request-builder/2"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.link_active : ""}`
          }
        >
          {currentRoute === "/request-builder/2" ? (
            <div className={styles.containerForIcon_active}>
              <div className={styles.handsIcon_active} />
            </div>
          ) : (
            <div className={styles.containerForIcon_inactive}>
              <div className={styles.handsIcon_inactive} />
            </div>
          )}
          Условия сотрудничества
        </NavLink>
        <NavLink
          to="/request-builder/3"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.link_active : ""}`
          }
        >
          {currentRoute === "/request-builder/3" ? (
            <div className={styles.containerForIcon_active}>
              <div className={styles.wishes_active} />
            </div>
          ) : (
            <div className={styles.containerForIcon_inactive}>
              <div className={styles.wishes_inactive} />
            </div>
          )}
          Пожелания к рекрутеру
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
