import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import "./app-header.scss";
import AppHeaderNavigation from "../app-header__navigation/app-header__navigation";

function AppHeader() {
  return (
    <>
      <header className="header">
        <div className="header__logo-HH" />
        <div className="header__logo-caption" />
        <AppHeaderNavigation>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/my-requests">Мои заявки</NavLink>
          <NavLink to="/market-search">Поиск по рынку</NavLink>
          <NavLink to="/account">Счёт</NavLink>
          <NavLink to="/help">Помощь</NavLink>
        </AppHeaderNavigation>
        <div className="header__heart-icon" />
        <div className="header__heart-bell" />
        <div className="header__avatar" />
        <div className="header__nameSurname">Анастасия Волошина</div>
        <div className="header__id">#67334</div>
        <div className="header__profile-container" />
      </header>
      <Outlet />
    </>
  );
}

export default AppHeader;
