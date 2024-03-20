/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Button } from "@mui/material";
import styles from "./404-window.module.scss";

function Window404() {
  return (
    <div className={styles.container}>
      <div className={styles.successPicture} />
      <div className={styles.containerForText}>
        <h2 className={styles.h2}>Такой страницы нет</h2>
      </div>
      <div className={styles.containerForButtons}>
        <div className={styles.containerForBtn}>
          <Button
            variant="contained"
            color="rqback"
            sx={{
              height: "46px",
              width: "180px",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            <p className={styles.button_text}>На главную</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Window404;
