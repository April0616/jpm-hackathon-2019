import React from "react";
import { Accordion } from "semantic-ui-react";

const panels = [
  {
    key: "acquire-dog",
    title: {
      content: "How do you run the DVC CommandLine?",
      icon: "question"
    },
    content: {
      content: (
        <span>
          Generate a stage file (DVC-file) from a given command and execute the
          command.
        </span>
      )
    }
  },
  {
    key: "care-for-dogs",
    title: {
      content: "Synopsis of DVC CLI",
      icon: "question"
    },
    content: {
      content: (
        <span>
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
        </span>
      )
    }
  }
];

const RunTabDoc = () => <Accordion panels={panels} />;

export default RunTabDoc;
