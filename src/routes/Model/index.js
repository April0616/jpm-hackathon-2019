import React from "react";
import model from "./models_houseprices.jpg";

import styles from "./Model.scss";

function Model() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <h1>Models</h1>
        <img src={model} className={styles.App_model.concat("responsive")} />
      </header>
    </div>
  );
}

export default Model;
