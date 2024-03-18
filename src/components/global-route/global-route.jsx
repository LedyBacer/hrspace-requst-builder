import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./global-route.module.scss";
import AppHeader from "../app-header/app-header";
import Footer from "../footer/footer";

function GlobalRoute() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default GlobalRoute;
