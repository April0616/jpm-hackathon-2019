import React from "react";
import * as styles from "./style.scss";
import { Grid, Container, Header } from "semantic-ui-react";
import RunTabDoc from "../../components/RunTabDoc";
import RunTabOptionCard from "../../components/RunTabOptionCard";

const PageHome = () => (
  <div className={styles.appContainer}>
    <Container>
      <Header as="h2"> Run Tab UI </Header>
      <RunTabDoc />

      <Header as="h4"> Options </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <RunTabOptionCard
              name="Stage File Dependent (-d, --deps)"
              desc="Specify a file or a directory the stage depends on. Multiple dependencies can be specified like this: -d data.csv -d process.py. Usually, each dependency is a file or a directory with data, or a code file, or a configuration file. DVC also supports certain external dependencies"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <RunTabOptionCard
              name="Save Output As File (-o, --outs)"
              desc="Specify a file or a directory that are results of running the command. Multiple outputs can be specified like this: -o model.pkl -o output.log. DVC is building a computation graph and this list of outputs (along with dependencies described above) is a way to connect different stages with each other. DVC takes all output files and directories under its control and will put them into the cache (this is similar to what's happening when you run dvc add)."
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <RunTabOptionCard
              name="Specify File Name (-f, --file)"
              desc="Specify stage file name. By default the DVC-file name generated is <file>.dvc, where <file> is file name of the first output (-o, -O, -m, or -M option). The stage file is placed in the same directory where dvc run is run by default, but -f can be used to change this location, by including a path in the provided value (e.g. -f stages/stage.dvc)."
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <RunTabOptionCard
              name="Add Output File (-m, --metrics)"
              desc="Another kind of output files. It is usually a small human readable file (JSON, CSV, text, whatnot) with some numbers or other information that describes a model or other outputs. Check dvc metrics to learn more about tracking metrics and comparing them across different model or experiment versions."
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default PageHome;
