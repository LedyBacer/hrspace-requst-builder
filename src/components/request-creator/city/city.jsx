import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./city.module.scss";
/* eslint-disable react/prop-types */
export default function City({ formik }) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const citysData = useSelector((state) => state.data.baseData.citys);
  return (
    <div className={styles.m32}>
      <h3 className={`${styles.text_h3} ${styles.m12}`}>Город</h3>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Autocomplete
        name="cityField"
        id="cityField"
        onChange={(event, value) => {
          formik.setFieldValue("cityField", value);
        }}
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            width: "345px",
            borderRadius: "8px",
          },
        }}
        options={citysData}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            color="rqback"
            onBlur={formik.handleBlur}
            error={formik.touched.cityField && Boolean(formik.errors.cityField)}
            helperText={formik.touched.cityField && formik.errors.cityField}
            {...params}
            size="small"
          />
        )}
      />
      {/* eslint-enable react/jsx-props-no-spreading */}
    </div>
  );
}
