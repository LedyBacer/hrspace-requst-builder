import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.successWindow}>
        <NavLink
          to="/request-builder/1"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.link_active : ""}`
          }
        >
          Данные по вакансии
        </NavLink>
        <NavLink
          to="/request-builder/2"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.link_active : ""}`
          }
        >
          Условия сотрудничества
        </NavLink>
        <NavLink
          to="/request-builder/3"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.link_active : ""}`
          }
        >
          Пожелания к рекрутеру
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
