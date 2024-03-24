import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import "./app-header.scss";

function AppHeader() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__container-left">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="header__logo_container" onClick={() => navigate("/")}>
          <div className="header__logo-HH" />
          <div className="header__logo-caption" />
        </div>
        <nav className="header__navigation">
          <ul className="header__navigation-ul">
            <li className="header__navigation-li">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `link ${isActive ? "link_active" : ""}`
                }
              >
                Заявки
              </NavLink>
            </li>
            <li className="header__navigation-li">
              <NavLink
                to="/workers"
                className={({ isActive }) =>
                  `link ${isActive ? "link_active" : ""}`
                }
              >
                Исполнители
              </NavLink>
            </li>
            <li className="header__navigation-li">
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  `link ${isActive ? "link_active" : ""}`
                }
              >
                Помощь
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__container-right">
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
