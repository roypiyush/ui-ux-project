import React from 'react';

class FormField extends React.Component {

    render() {
        return (
            <div className='form-group'>
                <div className="form-field col-sm-2"><label>{this.props.name}</label></div>
                <div className="form-field col-sm-10"><input className="form-control" type='text' />  </div>
            </div>
        );
    }
}

export default FormField;