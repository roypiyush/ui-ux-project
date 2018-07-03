import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            display: 'none'
        }
        this.handleKeypress = this.handleKeypress.bind(this);
    }
    handleKeypress(event, validate) {
        this.state.data = event.target.value;
        if (this.props.validate != null) {
            this.setState({display: this.props.validate(this.state.data) ? 'none' : 'block'});
        }
    }

    show() {
        if (this.state.isValidInput) {
            return 'none'
        }
        else {
            return 'block'
        }
    }

    render() {
        return (
            <div className='form-group'>
                <div className="form-field col-sm-3"><label>{this.props.name}</label></div>
                <div className="form-field col-sm-9">
                    <input className="form-control" type='text' onKeyUp={(e) => this.handleKeypress(e, this.props.validate)} />
                </div>
                <div style={{display: this.state.display, color: 'red'}}>{this.props.errorMessage}</div>
            </div>
        );
    }
}

export default Input;