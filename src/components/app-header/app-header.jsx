import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import "./app-header.scss";
import AppHeaderNavigation from "../app-header__navigation/app-header__navigation";

function AppHeader() {
  return (
    <>
      <header className="header">
        <p>Шапка</p>
        <div>logo</div>
        <AppHeaderNavigation>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/my-requests">Мои заявки</NavLink>
          <NavLink to="/market-search">Поиск по рынку</NavLink>
          <NavLink to="/account">Счёт</NavLink>
          <NavLink to="/help">Помощь</NavLink>
        </AppHeaderNavigation>
      </header>
      <Outlet />
    </>
  );
}

export default AppHeader;
