import { NavLink } from "react-router-dom";
import React from "react";
import "./app-header.scss";
import Navigation from "../navigation/navigation";

function AppHeader() {
  return (
    <header className="header">
      <div className="header__container-left">
        <div className="header__logo-HH" />
        <div className="header__logo-caption" />
      </div>
      <div className="header__container-right">
        <Navigation>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `link ${isActive ? "link_active" : ""}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/my-requests"
            className={({ isActive }) =>
              `link ${isActive ? "link_active" : ""}`
            }
          >
            Мои заявки
          </NavLink>
          <NavLink
            to="/market-search"
            className={({ isActive }) =>
              `link ${isActive ? "link_active" : ""}`
            }
          >
            Поиск по рынку
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              `link ${isActive ? "link_active" : ""}`
            }
          >
            Счёт
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `link ${isActive ? "link_active" : ""}`
            }
          >
            Помощь
          </NavLink>
        </Navigation>
        <div className="header__heart-icon" />
        <div className="header__heart-bell" />
        <div className="header__avatar" />
        <div className="header__profile-container">
          <div className="header__nameSurname">Анастасия Волошина</div>
          <div className="header__id">#67334</div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
