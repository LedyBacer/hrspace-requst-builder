import React from "react";
import styles from "./request-creator3.module.scss";
import EmployeeCount from "./employee-count/employee-count";
import RecruiterCount from "./recruiter-count/recruiter-count";
import RewardRadio from "./reward-radio/reward-radio";
import HintImages from "./hint-images/hint-images";
import AdditionalTasks from "./additional-tasks/additional-tasks";
import WhatNeedRadio from "./what-need-radio/what-need-radio";
import SpecialRequirements from "./special-requirements/special-requirements";
import CompanyInfo from "./company-info/company-info";
import RQNavigation from "./rqnavigation/rqnavigation";
/* eslint-disable react/prop-types */

function RequestCreator3({ formik }) {
  return (
    <div className={styles.container}>
      <EmployeeCount formik={formik} />
      <RecruiterCount formik={formik} />
      <RewardRadio />
      <HintImages />
      <AdditionalTasks />
      <WhatNeedRadio />
      <SpecialRequirements />
      <CompanyInfo />
      <RQNavigation />
    </div>
  );
}

export default RequestCreator3;
