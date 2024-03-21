import React from "react";
import styles from "./expirience.module.scss";
import { ReactComponent as PlusIcon } from "../../../images/plus.svg";
import { ReactComponent as MinusIcon } from "../../../images/minus.svg";
import { ThemedToggleButton, ThemedToggleButtonGroup } from "../../../ui/ui";
/* eslint-disable react/prop-types */
export default function Expirience({ formik }) {
  const [showExperience, setShowExperience] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showExperience ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className={styles.spoiler_text_container}
            onClick={() => setShowExperience(false)}
          >
            <h3 className={`${styles.text_h3} ${styles.mr8}`}>Опыт работы</h3>
            <MinusIcon />
          </div>
          <div className={`${styles.toggle_buttons} ${styles.mt12}`}>
            <ThemedToggleButtonGroup
              name="expirience"
              exclusive
              value={formik.values.expirience}
              onChange={formik.handleChange}
              aria-label="choose expirience"
            >
              <ThemedToggleButton name="expirience" value="неважно">
                неважно
              </ThemedToggleButton>
              <ThemedToggleButton name="expirience" value="нет опыта">
                нет опыта
              </ThemedToggleButton>
              <ThemedToggleButton name="expirience" value="1-3 года">
                1-3 года
              </ThemedToggleButton>
              <ThemedToggleButton name="expirience" value="3-6 лет">
                3-6 лет
              </ThemedToggleButton>
            </ThemedToggleButtonGroup>
          </div>
        </>
      ) : (
        /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */
        <div
          className={styles.spoiler_text_container}
          onClick={() => setShowExperience(true)}
        >
          <PlusIcon />
          <h3 className={styles.spoiler_link}>Опыт работы</h3>
        </div>
      )}
    </>
  );
}
