import React from "react";
import styles from "./grade.module.scss";
import { ReactComponent as PlusIcon } from "../../../images/plus.svg";
import { ReactComponent as MinusIcon } from "../../../images/minus.svg";
import { ThemedToggleButton, ThemedToggleButtonGroup } from "../../../ui/ui";
/* eslint-disable react/prop-types */

export default function Grade({ formik }) {
  const [showGrade, setShowGrade] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showGrade ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
          <div
            className={styles.spoiler_text_container}
            onClick={() => setShowGrade(false)}
          >
            <h3 className={`${styles.text_h3} ${styles.mr8}`}>Грейд</h3>
            <MinusIcon />
          </div>
          <div className={`${styles.toggle_buttons} ${styles.mt12}`}>
            <ThemedToggleButtonGroup
              name="grade"
              exclusive
              value={formik.values.grade}
              onChange={formik.handleChange}
              aria-label="choose grade"
            >
              <ThemedToggleButton name="grade" value="junior">
                junior
              </ThemedToggleButton>
              <ThemedToggleButton name="grade" value="middle">
                middle
              </ThemedToggleButton>
              <ThemedToggleButton name="grade" value="senior">
                senior
              </ThemedToggleButton>
              <ThemedToggleButton name="grade" value="lead">
                lead
              </ThemedToggleButton>
            </ThemedToggleButtonGroup>
          </div>
        </>
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          className={styles.spoiler_text_container}
          onClick={() => setShowGrade(true)}
        >
          <PlusIcon />
          <h3 className={styles.spoiler_link}>Грейд</h3>
        </div>
      )}
    </>
  );
}
