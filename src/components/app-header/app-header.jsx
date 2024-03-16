import { Outlet } from "react-router-dom";
import React from "react";

function AppHeader() {
  return (
    <>
      <header>
        <p>Шапка</p>
      </header>
      <Outlet />
    </>
  );
}

export default AppHeader;
