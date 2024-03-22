import { Switch } from "@mui/material";
import React from "react";
import styles from "./company-info.module.scss";

export default function CompanyInfo() {
  return (
    <div className={`${styles.company_info_header} ${styles.mt32}`}>
      <h2 className={styles.text_header}>Показывать информацию о компании</h2>
      <Switch inputProps={{ "aria-label": "test" }} color="rqback" />
    </div>
  );
}
