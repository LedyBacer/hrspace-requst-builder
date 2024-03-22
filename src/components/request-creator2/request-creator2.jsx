import React from "react";
import styles from "./request-creator2.module.scss";
import RewardRadio from "./reward-radio/reward-radio";
import RewardField from "./reward-field/reward-field";
import HintImages from "./hint-images/hint-images";
import RQNavigation from "./rqnavigation/rqnavigation";

function RequestCreator2() {
  return (
    <div className={styles.container}>
      <h2 className={styles.reward_text_header}>Выплата HR</h2>
      <RewardRadio />
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
