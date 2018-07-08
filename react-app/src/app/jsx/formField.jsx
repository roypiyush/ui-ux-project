import React from 'react';
import Input from './input.jsx';

class FormField extends React.Component {

  render() {
    let field;
    if (this.props.type === 'input') {
      field = <Input name={this.props.name} errorMessage={this.props.errorMessage}
        validate={this.props.validate} />;
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