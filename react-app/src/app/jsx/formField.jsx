import React from 'react';
import Input from './input.jsx';

class FormField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: {}
    }
  }

  render() {
    let field;
    if (this.props.type === 'input') {
      field = <Input name={this.props.name} errorMessage={this.props.errorMessage}
        validate={this.props.validate} handleChange={this.props.handleChange} />;
    } else if (this.props.type === 'dropdown') {
      
    }
    return (
      <div>
        {field}
      </div>
    );
  }
}

export default FormField;