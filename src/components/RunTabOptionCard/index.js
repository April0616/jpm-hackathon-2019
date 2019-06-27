import React from "react";
import { Header } from "semantic-ui-react";
import PropTypes from "prop-types";

const RunTabOptionCard = props => {
  const { name, desc } = props;
  return (
    <div>
      <Header as="h3">{name}</Header>
      <p>{desc}</p>
    </div>
  );
};

RunTabOptionCard.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.object
};

export default RunTabOptionCard;
