import React from "react";
import styles from "./request-builder.module.scss";
import Sidebar from "../../components/sidebar/sidebar";
import RequestCreator from "../../components/request-creator/request-creator";
// import TextinputSearch from "../../components/textinput-search/textinput-search";

function RequestBuilder() {
  return (
    <div className={styles.root_container}>
      {/* <p>конструктор</p> */}
      {/* <p>тут будут всякие инпуты и кнопки</p> */}
      {/* <TextinputSearch /> */}
      <div className={styles.container}>
        <div className={styles.back}>
          <p>{`<- назад`}</p>
        </div>
        <div className={styles.content_container}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.request_creator}>
            <RequestCreator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestBuilder;
