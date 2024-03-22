import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import styles from "./request-builder.module.scss";
import Sidebar from "../../components/sidebar/sidebar";
import RequestCreator from "../../components/request-creator/request-creator";
import RequestCreator2 from "../../components/request-creator2/request-creator2";
import RequestCreator3 from "../../components/request-creator3/request-creator3";
import { saveFormState } from "../../services/formSlice";

/* eslint-disable */
function RequestBuilder({ page = 1 }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formStateFromRedux = useSelector((state) => state.form.formState);

  const validationSchema = yup.object({
    vacancyNameField: yup.object().shape({
      name: yup.string().min(3).required(),
    }),
    specialisationField: yup.object().required(),
    cityField: yup.object().required(),
    salaryFromField: yup
      .number()
      .positive()
      .min(1000)
      .max(1000000000)
      .integer()
      .required(),
    salaryToField: yup
      .number()
      .positive()
      .min(1000)
      .max(1000000000)
      .integer()
      .required(),
    rewardField: yup
      .number()
      .positive()
      .min(1000)
      .max(1000000000)
      .integer()
      .required(),
    employeeCountField: yup
      .number()
      .positive()
      .min(1)
      .max(1000)
      .integer()
      .required(),
  });

  const formik = useFormik({
    initialValues: formStateFromRedux || {
      vacancyNameField: {
        id: -1,
        name: "Test",
      },
      specialisationField: {
        id: 2,
        title: "Администратор",
        specialisation: "Административный персонал",
      },
      grade: "",
      expirience: "",
      cityField: "",
      worktype: [],
      employment: "",
      registrationType: "",
      salaryFromField: "",
      salaryToField: "",
      responsibilitiesCheckboxes: [],
      responsibilitiesField: "",
      requirementsCheckboxes: [],
      requirementsField: "",
      conditionsCheckbox: [],
      conditionsField: "",
      rewardRadio: 0,
      rewardField: "",
      employeeCountField: "",
      recruiterCount: "",
      rewardRadio3: 0,
      whatNeedRadio: 0,
      specialRequirementsField: "",
      companyInfoSwitch: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  useEffect(
    () => () => {
      const formState = formik.values;
      dispatch(saveFormState(formState));
      console.log(JSON.stringify(formState, null, 2));
    },
    [formik],
  );

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <button className={styles.button} onClick={() => navigate("/")}>
          <div className={styles.btnIcon}></div>Назад
        </button>
      </div>
      <div className={styles.content_container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.request_creator}>
          {page === 1 ? (
            <RequestCreator formik={formik} />
          ) : page === 2 ? (
            <RequestCreator2 formik={formik} />
          ) : (
            <RequestCreator3 formik={formik} />
          )}
        </div>
      </div>
    </div>
  );
}

export default RequestBuilder;
