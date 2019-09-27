import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
    message: ""
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.handleChange(event)} value={this.state.message}/>
        {<h4>{this.props.maxChars - this.state.message.length} Characters remaining</h4>}
      </div>
    );
  }
}

export default TwitterMessage;
