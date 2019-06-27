import React from "react";
import * as styles from "./style.scss";

const PageHome = () => (
  <div className={styles.appContainer}>
    <div className={styles.welcomeHeader}>UI For Machine Learning!</div>
    <div className={styles.welcomeMessage}>
      Minion has spawned!
    </div>
    <div className={styles.welcomeMessage.concat(" ").concat(styles.emoji)}>
      🚀
    </div>
  </div>
);

export default PageHome;
