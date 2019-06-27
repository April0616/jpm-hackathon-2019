import React, { PureComponent } from "react";
// Components
import { List, Accordion, Icon, Header } from "semantic-ui-react";
import FileListItem from "../../components/FileListItem";
// Utils
import {
  getTrackedFiles,
  getUntrackedFiles,
  getOppositeType,
  hashMessageFiles
} from "./utils";
// Styles
import styles from "./styles.scss";
import CommitMessageInput from "../../components/CommitMessageInput";

const defaultFiles = [
  {
    id: 1,
    fileName: "test1.py",
    type: "untracked",
    lastUpdated: "30 mins ago"
  },
  {
    id: 2,
    fileName: "test2.py",
    type: "untracked",
    lastUpdated: "10 mins ago"
  },
  {
    id: 3,
    fileName: "data.csv",
    type: "untracked",
    lastUpdated: "an hour ago"
  }
];

class VersionControl extends PureComponent {
  state = {
    files: [...defaultFiles],
    activeBranch: "master",
    activeIndex: [0, 1],
    history: [
      { message: "First init", files: ["README.md"], hash: "12391041" }
    ],
    commitMessage: ""
  };

  handleActionClick = id => () => {
    const { files } = this.state;
    const idx = files.findIndex(file => file.id === id);
    this.setState({
      files: [
        ...files.slice(0, idx),
        { ...files[idx], type: getOppositeType(files[idx]) },
        ...files.slice(idx + 1)
      ]
    });
  };

  toogleIndex = index => () => {
    const { activeIndex } = this.state;
    if (activeIndex.includes(index)) {
      this.setState({ activeIndex: [...activeIndex.filter(x => x !== index)] });
    } else {
      this.setState({ activeIndex: [...activeIndex, index] });
    }
  };

  handleChangeMessage = ({ target: { value } }) => {
    this.setState({ commitMessage: value });
  };

  handleCommitSubmit = message => {
    const { history, files } = this.state;
    const trackedFiles = getTrackedFiles(files);
    if (trackedFiles.length === 0) return;
    const hash = hashMessageFiles(message, trackedFiles);
    this.setState({
      history: [{ message, files: trackedFiles, hash }, ...history],
      commitMessage: "",
      files: [...defaultFiles]
    });
  };

  render() {
    const { files, activeBranch, commitMessage, history } = this.state;
    return (
      <div className={styles.versionControl__container}>
        <div className={styles.versionControl__commit}>
          <Header>Source Control: DVC</Header>
          <CommitMessageInput
            onChange={this.handleChangeMessage}
            message={commitMessage}
            onSubmit={this.handleCommitSubmit}
          />
          <Accordion exclusive={false} fluid>
            <Accordion.Title active index={0}>
              STAGED CHANGES
            </Accordion.Title>
            <Accordion.Content active>
              <List relaxed>
                {getTrackedFiles(files).map(trackedFile => (
                  <FileListItem
                    key={trackedFile.id}
                    onActionClick={this.handleActionClick(trackedFile.id)}
                    {...trackedFile}
                  />
                ))}
                {getTrackedFiles(files).length === 0 ? (
                  <i>No staged changes added</i>
                ) : (
                  ""
                )}
              </List>
            </Accordion.Content>
            <Accordion.Title active index={1}>
              CHANGES
            </Accordion.Title>
            <Accordion.Content active>
              <List relaxed>
                {getUntrackedFiles(files).map(trackedFile => (
                  <FileListItem
                    key={trackedFile.id}
                    onActionClick={this.handleActionClick(trackedFile.id)}
                    {...trackedFile}
                  />
                ))}
                {getUntrackedFiles(files).length === 0 ? (
                  <i>No untracked files detected</i>
                ) : (
                  ""
                )}
              </List>
            </Accordion.Content>
          </Accordion>
        </div>
        <div className={styles.versionControl__overview}>
          <Header>
            Current Branch
            <span style={{ verticalAlign: "middle" }}>
              <Icon name="long arrow alternate right" />
              {activeBranch}
            </span>
          </Header>
          History
          <List relaxed>
            {history.map(({ files, message, hash }) => {
              return (
                <List.Item key={hash}>
                  <List.Icon name="circle" />
                  <List.Content>
                    <List.Header as="a">
                      {hash.slice(0, 5)} - {message}
                    </List.Header>
                    <List.Description>
                      {files.length} files changed
                    </List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default VersionControl;
