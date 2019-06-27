import React from "react";
import pipeline from "./pipeline.jpg";

import styles from "./Pipeline.scss";

function Pipeline() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <h1>Data Pipeline</h1>
        <img
          src={pipeline}
          className={styles.App_logo.concat("responsive")}
          alt="logo"
        />
      </header>
    </div>
  );
}

export default Pipeline;
