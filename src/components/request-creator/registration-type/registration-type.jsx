import React from "react";
import styles from "./registration-type.module.scss";
import { ReactComponent as PlusIcon } from "../../../images/plus.svg";
import { ReactComponent as MinusIcon } from "../../../images/minus.svg";
import { ThemedToggleButton, ThemedToggleButtonGroup } from "../../../ui/ui";
/* eslint-disable react/prop-types */
export default function RegistrationType({ formik }) {
  const [showRegistrationType, setShowRegistrationType] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showRegistrationType ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
          <div
            className={styles.spoiler_text_container}
            onClick={() => setShowRegistrationType(false)}
          >
            <h3 className={`${styles.text_h3} ${styles.mr8}`}>
              Тип оформления
            </h3>
            <MinusIcon />
          </div>
          <div className={`${styles.toggle_buttons} ${styles.mt12}`}>
            <ThemedToggleButtonGroup
              name="registrationType"
              exclusive
              value={formik.values.registrationType}
              onChange={formik.handleChange}
              aria-label="choose employment"
            >
              <ThemedToggleButton name="registrationType" value="ТК РФ">
                ТК РФ
              </ThemedToggleButton>
              <ThemedToggleButton name="registrationType" value="ИП">
                ИП
              </ThemedToggleButton>
              <ThemedToggleButton name="registrationType" value="самозанятость">
                самозанятость
              </ThemedToggleButton>
              <ThemedToggleButton name="registrationType" value="ГПХ">
                ГПХ
              </ThemedToggleButton>
            </ThemedToggleButtonGroup>
          </div>
        </>
      ) : (
        /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */
        <div
          className={styles.spoiler_text_container}
          onClick={() => setShowRegistrationType(true)}
        >
          <PlusIcon />
          <h3 className={styles.spoiler_link}>Тип оформления</h3>
        </div>
      )}
    </>
  );
}
