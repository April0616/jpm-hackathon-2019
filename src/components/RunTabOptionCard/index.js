import React from "react";
import { Header } from "semantic-ui-react";
import PropTypes from "prop-types";
import OptionModal from "../Modal";

const RunTabOptionCard = props => {
  const { name, desc } = props;
  return (
    <div>
      <OptionModal name={name} desc={desc} />
    </div>
  );
};

RunTabOptionCard.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.object
};

export default RunTabOptionCard;
