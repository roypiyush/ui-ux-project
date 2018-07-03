import React from 'react';
import Input from './input.jsx';

class FormField extends React.Component {

    render() {
        let field;
        if (this.props.type === 'input') {
            field = <Input name={this.props.name} errorMessage={this.props.errorMessage}
                validate={this.props.validate} />;
            console.log("FormField of type input received " + field);
        }
        return (
            <div>
                {field}
            </div>
        );
    }
}

export default FormField;