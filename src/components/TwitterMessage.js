import React from 'react';

class TwitterMessage extends React.Component {
  state = {message: ''};

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    });
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          // following line to avoid test issues and complete react state render cycle
          value={this.state.message}
        />
        <p>
          ({this.props.maxChars - this.state.message.length} remaining
          characters)
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
