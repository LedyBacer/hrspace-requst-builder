import React from "react";
import styles from "./request-builder.module.scss";
import Sidebar from "../../components/sidebar/sidebar";
import RequestCreator from "../../components/request-creator/request-creator";
import RequestCreator2 from "../../components/request-creator2/request-creator2";
import RequestCreator3 from "../../components/request-creator3/request-creator3";

/* eslint-disable */
function RequestBuilder({ page = 1 }) {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <p>{`<- назад`}</p>
      </div>
      <div className={styles.content_container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.request_creator}>
          {page === 1 ? (
            <RequestCreator />
          ) : page === 2 ? (
            <RequestCreator2 />
          ) : (
            <RequestCreator3 />
          )}
        </div>
      </div>
    </div>
  );
}

export default RequestBuilder;
