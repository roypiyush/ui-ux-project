import React from 'react';
import Dispatcher from '../dispacher/defauldispatcher';

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      errorClass: 'hide-error'
    }
    this.handleKeypress = this.handleKeypress.bind(this);
  }
  handleKeypress(event) {
    this.state.data = event.target.value;
    if (this.props.validate != null) {
      if (this.props.validate(this.state.data)) {
        this.setState({ errorClass: 'hide-error'});
        this.props.handleChange(event);
      } else {
        this.setState({ errorClass: 'show-error' });
      }
    }
  }
  getData() {
    return this.state.data;
  }
  render() {
    return (
      <div className='form-group'>
        <div className="form-field col-sm-3"><label>{this.props.name}</label></div>
        <div className="form-field col-sm-9">
          <input className="form-control" type='text' onKeyUp={(e) => this.handleKeypress(e)} />
        </div>
        <div className={this.state.errorClass}>{this.props.errorMessage}</div>
      </div>
    );
  }
}

export default Input;