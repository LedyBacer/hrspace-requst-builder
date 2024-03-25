import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./global-route.module.scss";
import AppHeader from "../app-header/app-header";
import Footer from "../footer/footer";
import Popup from "../popup/popup";
/* eslint-disable react/prop-types */
function GlobalRoute({ formik }) {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={`${styles.container} ${["/success", "/failure", "/404"].includes(currentRoute) ? styles.containerAnotherTheme : ""}`}
      >
        <AppHeader />
        <div className={styles.content}>
          <Outlet />
        </div>
        <Footer />
      </div>
      <Popup />
    </form>
  );
}

export default GlobalRoute;
