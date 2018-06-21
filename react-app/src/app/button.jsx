import React from 'react';

class SimpleButton extends React.Component {
    render() {
        return (
            <button value={this.props.value} name={this.props.value}>{this.props.text}</button>
        );
    }
}

export default SimpleButton;