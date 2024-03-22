import { Switch } from "@mui/material";
import React from "react";
import styles from "./company-info.module.scss";
/* eslint-disable react/prop-types */
export default function CompanyInfo({ formik }) {
  return (
    <div className={`${styles.company_info_header} ${styles.mt32}`}>
      <h2 className={styles.text_header}>Показывать информацию о компании</h2>
      <Switch
        color="rqback"
        checked={formik.values.companyInfoSwitch}
        onChange={(event, checked) => {
          formik.setFieldValue("companyInfoSwitch", checked);
        }}
      />
    </div>
  );
}
