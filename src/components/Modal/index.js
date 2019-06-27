import React from "react";
import { Icon, Header, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";

import styles from "./styles.scss";

const OptionModal = props => {
  const { title, desc } = props;
  return (
    <Modal trigger={<Icon name='help' style={{marginLeft: 8}}/>}>
      <Modal.Header>Description</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>{title}</Header>
          <p className={styles.content}>> {desc} </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

OptionModal.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default OptionModal;
