import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import NotFound404 from "./pages/not-found/not-found";
import * as yup from "yup";
import { useFormik } from "formik";
import HomePage from "./pages/home-page/home-page";
import RequestBuilder from "./pages/request-builder/request-builder";
import GlobalRoute from "./components/global-route/global-route";
import Success from "./components/success/success";
import FailureWindow from "./components/failure-window/failure-window";
import Window404 from "./components/404-window/404-window";
import {
  formDataPost,
  getCategoriesRequest,
  getCityRequest,
  getRequiredDataFromSpecRequest,
  getRequiredDataRequest,
  getVacancyNamesRequest,
  handleClearRequiredData,
  handleClearSalaryData,
} from "./services/dataSlice";
import { saveFormState } from "./services/formSlice";
/* eslint-disable react-hooks/exhaustive-deps, react-redux/useSelector-prefer-selectors */
function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const isLoading = useSelector((state) => state.data.isLoading);

  useEffect(() => {
    dispatch(getCityRequest());
    dispatch(getVacancyNamesRequest());
    dispatch(getCategoriesRequest());
  }, []);

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
      dispatch(formDataPost(values));
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
      /// //////////////////////////////////////////////

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
      /// //////////////////////////////////////////////
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
      /// //////////////////////////////////////////////
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
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <p>Загрузка..</p>
      ) : (
        <Routes>
          <Route element={<GlobalRoute formik={formik} />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/request-builder/1"
              element={<RequestBuilder page={1} formik={formik} />}
            />
            <Route
              path="/request-builder/2"
              element={<RequestBuilder page={2} formik={formik} />}
            />
            <Route
              path="/request-builder/3"
              element={<RequestBuilder page={3} formik={formik} />}
            />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<FailureWindow />} />
            {/* <Route path="/404" element={<Window404 />} /> */}
            {/* <Route path="/pay" element={}/> */}

            <Route path="*" element={<Window404 />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
