import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
    maxChars: ''
  };

  handleChange = event => this.setState({
    maxChars: event.target.value
  })

  remainingChars = () => {

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.maxChars} onChange={this.handleChange} />
        {this.props.maxChars-this.state.maxChars.length}
      </div>
    );
  }
}

export default TwitterMessage;
