import React from "react";
import * as styles from "./style.scss";

const PageHome = () => (
  <div className={styles.appContainer}>
    <div className={styles.welcomeHeader}>UI For Run Tab</div>
    <div>
      <h3>Run</h3>
      <p>
        Generate a stage file (DVC-file) from a given command and execute the
        command.
      </p>

      <h3>Synopsis</h3>
      <p>
        <b>usage</b>: dvc run [-h] [-q | -v] [-d DEPS] [-o OUTS] [-O
        OUTS_NO_CACHE]
      </p>
      <p>[-m METRICS] [-M METRICS_NO_CACHE] [-f FILE] [-c CWD]</p>
      <p>[-w WDIR] [--no-exec] [-y] [--overwrite-dvcfile]</p>
      <p>[--ignore-build-cache] [--remove-outs] [--no-commit]</p>
      <p>[--outs-persist OUTS_PERSIST]</p>
      <p>[--outs-persist-no-cache OUTS_PERSIST_NO_CACHE]</p>
      <p>command</p>
      <p>
        <b>positional arguments:</b>
      </p>
      <p>command Command to execute.</p>

      <h3>Options</h3>
      <h4>-d, --deps</h4>
      <p>- specify a file or a directory the stage depends on. Multiple dependencies can be specified like this: -d data.csv
        -d process.py. Usually, each dependency
        is a file or a directory with data, or a code file, or a
        configuration file. DVC also supports certain external dependencies</p>

    </div>
  </div>
);

export default PageHome;
