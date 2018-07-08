import React from 'react';

class SimpleDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      errorClass: 'hide-error'
    }
  }

  render() {
    return (
      <div className='form-group'>
        <div className="form-field col-sm-3"><label>{this.props.name}</label></div>
        <select className="form-field col-sm-9">
          <option value=''>Select</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <div className={this.state.errorClass}>{this.props.errorMessage}</div>
      </div>
    );
  }
}

export default SimpleDropdown;