import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

class CommitMessageInput extends PureComponent {
  onKeyPress = event => {
    const { onSubmit, message } = this.props;
    if (event.altKey && event.key === "Enter") {
      event.preventDefault();
      onSubmit(message);
    }
  };
  render() {
    const { onChange, message, ...restProps } = this.props;
    return (
      <TextareaAutosize
        placeholder="Message (press Alt+Enter to commit)"
        onChange={onChange}
        value={message}
        onKeyPress={this.onKeyPress}
        minRows={1}
        style={{ width: "100%", minHeight: 40 }}
        {...restProps}
      />
    );
  }
}

CommitMessageInput.propTypes = {
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CommitMessageInput;
