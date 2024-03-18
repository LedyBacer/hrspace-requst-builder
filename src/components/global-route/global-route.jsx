import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./global-route.module.scss";
import AppHeader from "../app-header/app-header";

function GlobalRoute() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <Outlet />
      {/* <AppFooter /> */}
    </div>
  );
}

export default GlobalRoute;
