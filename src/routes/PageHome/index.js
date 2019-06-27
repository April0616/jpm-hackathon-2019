import React from "react";
import * as styles from "./style.scss";
import { Container } from "semantic-ui-react";
import RunTab from "../../components/RunTab";

const PageHome = () => (
  <div className={styles.appContainer}>
    <Container>
      <RunTab />
    </Container>
  </div>
);

export default PageHome;
