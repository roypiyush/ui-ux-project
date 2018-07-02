import React from 'react';
import Input from './input.jsx';

class FormField extends React.Component {

    render() {
        return (
            <Input name={this.props.name} />
        );
    }
}

export default FormField;