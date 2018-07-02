import React from 'react';
import Input from './input.jsx';

class FormField extends React.Component {

    render() {
        let field;
        if (this.props.type === 'input') {
            field = <Input name={this.props.name} />;
            console.log("FormField of type input received " + field);
        }
        return (
            <Input name={this.props.name} />
        );
    }
}

export default FormField;