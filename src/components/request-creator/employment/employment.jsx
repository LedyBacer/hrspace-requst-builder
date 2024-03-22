import React from "react";
import styles from "./employment.module.scss";
import { ReactComponent as PlusIcon } from "../../../images/plus.svg";
import { ReactComponent as MinusIcon } from "../../../images/minus.svg";
import { ThemedToggleButton, ThemedToggleButtonGroup } from "../../../ui/ui";
/* eslint-disable react/prop-types */

export default function Employment({ formik }) {
  const [showEmployment, setShowEmployment] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showEmployment ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
          <div
            className={styles.spoiler_text_container}
            onClick={() => setShowEmployment(false)}
          >
            <h3 className={`${styles.text_h3} ${styles.mr8}`}>Занятость</h3>
            <MinusIcon />
          </div>
          <div className={`${styles.toggle_buttons} ${styles.mt12}`}>
            <ThemedToggleButtonGroup
              name="employment"
              exclusive
              value={formik.values.employment}
              onChange={formik.handleChange}
              aria-label="choose employment"
            >
              <ThemedToggleButton name="employment" value="полная занятость">
                полная занятость
              </ThemedToggleButton>
              <ThemedToggleButton name="employment" value="частичная">
                частичная
              </ThemedToggleButton>
              <ThemedToggleButton name="employment" value="посменно">
                посменно
              </ThemedToggleButton>
              <ThemedToggleButton name="employment" value="другое">
                другое
              </ThemedToggleButton>
            </ThemedToggleButtonGroup>
          </div>
        </>
      ) : (
        /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */
        <div
          className={styles.spoiler_text_container}
          onClick={() => setShowEmployment(true)}
        >
          <PlusIcon />
          <h3 className={styles.spoiler_link}>Занятость</h3>
        </div>
      )}
    </>
  );
}
