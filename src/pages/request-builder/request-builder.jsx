import React, { useEffect, useState } from "react";
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
import {
  getRequiredDataFromSpecRequest,
  getRequiredDataRequest,
  handleClearRequiredData,
  handleClearSalaryData,
} from "../../services/dataSlice";

/* eslint-disable */
function RequestBuilder({ page = 1 }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formStateFromRedux = useSelector((state) => state.form.formState);
  const baseDataFromRedux = useSelector((state) => state.data.baseData);

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
      vacancyNameField: null,
      specialisationField: null,
      cityField: null,
      grade: "",
      expirience: "",
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
      additionalTasks: [],
      whatNeedRadio: 0,
      specialRequirementsField: "",
      companyInfoSwitch: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const [vacancyNameTemp, handleVacancyNameTemp] = useState({});
  const [cityTemp, handlecityTemp] = useState({});
  const [specialisationTemp, handleSpecialisationTemp] = useState({});
  useEffect(
    () => () => {
      const formState = formik.values;
      // console.log(JSON.stringify(formState, null, 2));

      const firstFieldHandler = () => {
        dispatch(
          getRequiredDataFromSpecRequest({
            specId: formState.vacancyNameField.id,
          }),
        );

        const tmpSpecName = baseDataFromRedux.specialisationNames.find(
          (item) => item.id === formState.vacancyNameField.id,
        );
        const tmpSpec = baseDataFromRedux.specialisations.find(
          (item) => item.id === tmpSpecName.specialisationsId,
        );

        formik.setFieldValue("specialisationField", {
          id: tmpSpecName.id,
          title: tmpSpecName.name,
          specialisation: tmpSpec.name,
        });
      };

      if (
        formState.vacancyNameField !== null &&
        formState.cityField === null &&
        formState.vacancyNameField !== vacancyNameTemp
      ) {
        if (formState.specialisationField === null) {
          if (formState.vacancyNameField.id !== undefined) {
            firstFieldHandler();
          }
        } else if (
          formState.vacancyNameField.id !== formState.specialisationField.id &&
          formState.vacancyNameField.id !== undefined
        ) {
          firstFieldHandler();
        }
      }
      /////////////////////////////////////////////////

      if (
        formState.cityField === null &&
        formState.specialisationField !== specialisationTemp
      ) {
        if (formState.vacancyNameField === null) {
          if (formState.specialisationField !== null) {
            dispatch(
              getRequiredDataFromSpecRequest({
                specId: formState.specialisationField.id,
              }),
            );
          }
        } else if (
          formState.vacancyNameField.name !== undefined &&
          formState.specialisationField !== null
        ) {
          dispatch(
            getRequiredDataFromSpecRequest({
              specId: formState.specialisationField.id,
            }),
          );
        }
      }
      /////////////////////////////////////////////////
      if (
        formState.cityField !== null &&
        formState.specialisationField !== null &&
        (formState.specialisationField !== specialisationTemp ||
          formState.cityField !== cityTemp)
      ) {
        dispatch(
          getRequiredDataRequest({
            vacancyNameFieldId: formState.specialisationField.id,
            cityId: formState.cityField.id,
          }),
        );
      }
      /////////////////////////////////////////////////
      if (formState.cityField === null) {
        dispatch(handleClearSalaryData());
      }

      if (formState.specialisationField === null) {
        dispatch(handleClearRequiredData());
      }

      dispatch(saveFormState(formik.values));
      handleSpecialisationTemp(formState.specialisationField);
      handleVacancyNameTemp(formState.vacancyNameField);
      handlecityTemp(formState.cityField);
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
