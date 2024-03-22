import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./specialisation.module.scss";
/* eslint-disable react/prop-types */

export default function Specialisation({ formik }) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const specialisationsData = useSelector(
    (state) => state.data.baseData.specialisations,
  );
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const specialisationNamesData = useSelector(
    (state) => state.data.baseData.specialisationNames,
  );

  const data = specialisationNamesData.map((name) => {
    const specialisation = specialisationsData.find(
      (spec) => spec.id === name.specialisationsId,
    );
    return {
      id: name.id,
      title: name.name,
      specialisation: specialisation.name,
    };
  });

  // const data = [
  //   { title: "Курьер", specialisation: "Административный персонал" },
  //   { title: "Администратор", specialisation: "Административный персонал" },
  //   { title: "Фронтендер", specialisation: "Программисты" },
  //   { title: "Бэкендер", specialisation: "Программисты" },
  // ];

  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Специализация</h3>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Autocomplete
        id="specialisationField"
        name="specialisationField"
        onChange={(event, value) => {
          formik.setFieldValue("specialisationField", value);
        }}
        options={data.sort(
          (a, b) => -b.specialisation.localeCompare(a.specialisation),
        )}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        groupBy={(option) => option.specialisation}
        getOptionLabel={(option) => option.title}
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
          },
        }}
        renderInput={(params) => (
          <TextField
            onBlur={formik.handleBlur}
            error={
              formik.touched.specialisationField &&
              Boolean(formik.errors.specialisationField)
            }
            helperText={
              formik.touched.specialisationField &&
              formik.errors.specialisationField
            }
            color="rqback"
            {...params}
          />
        )}
      />
      {/* eslint-enable react/jsx-props-no-spreading */}
    </div>
  );
}
