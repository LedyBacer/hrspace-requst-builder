import React from "react";
import styles from "./request-creator2.module.scss";
import RewardRadio from "./reward-radio/reward-radio";
import RewardField from "./reward-field/reward-field";
import HintImages from "./hint-images/hint-images";
import RQNavigation from "./rqnavigation/rqnavigation";
/* eslint-disable react/prop-types */

function RequestCreator2({ formik }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.reward_text_header}>Выплата HR</h2>
      <RewardRadio formik={formik} />
      <h2 className={`${styles.reward_text_header} ${styles.mt32}`}>
        Вознаграждение HR за сотрудника
      </h2>
      <RewardField />
      <HintImages />
      <RQNavigation />
    </div>
  );
}

export default RequestCreator2;
