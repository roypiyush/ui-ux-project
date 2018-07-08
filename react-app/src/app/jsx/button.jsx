import React from 'react';

class SimpleButton extends React.Component {
  render() {
    return (
      <button className={this.props.className}
        value={this.props.value}
        name={this.props.value}>{this.props.text}</button>
    );
  }
}

export default SimpleButton;