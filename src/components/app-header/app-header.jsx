import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import "./app-header.scss";
import AppHeaderNavigation from "../app-header-navigation/app-header-navigation";

function AppHeader() {
  return (
    <>
      <header className="header">
        <div className="header__container-left">
          <div className="header__logo-HH" />
          <div className="header__logo-caption" />
        </div>
        <div className="header__container-right">
          <AppHeaderNavigation>
            <NavLink to="/" className="link">
              Главная
            </NavLink>
            <NavLink to="/my-requests" className="link">
              Мои заявки
            </NavLink>
            <NavLink to="/market-search" className="link">
              Поиск по рынку
            </NavLink>
            <NavLink to="/account" className="link">
              Счёт
            </NavLink>
            <NavLink to="/help" className="link">
              Помощь
            </NavLink>
          </AppHeaderNavigation>
          <div className="header__heart-icon" />
          <div className="header__heart-bell" />
          <div className="header__avatar" />
          <div className="header__profile-container">
            <div className="header__nameSurname">Анастасия Волошина</div>
            <div className="header__id">#67334</div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AppHeader;
