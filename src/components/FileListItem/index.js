import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";

import styles from "./styles.scss";

class FileListItem extends PureComponent {
  render() {
    const { fileName, lastUpdated, onActionClick, type } = this.props;
    return (
      <List.Item>
        <List.Content className={styles.content}>
          <List.Header as="a">{fileName}</List.Header>
          <List.Description as="span">Updated {lastUpdated}</List.Description>
          <List.Icon
            name={type === "staged" ? "minus" : "add"}
            size="small"
            verticalAlign="middle"
            onClick={onActionClick}
          />
        </List.Content>
      </List.Item>
    );
  }
}

FileListItem.propTypes = {
  fileName: PropTypes.string,
  lastUpdated: PropTypes.string,
  onActionClick: PropTypes.func,
  type: PropTypes.oneOf(["staged", "untracked"])
};

FileListItem.defaultProps = {
  fileName: "",
  lastUpdated: "",
  onActionClick: () => {},
  type: "staged"
};

export default FileListItem;
