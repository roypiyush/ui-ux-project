import React from 'react';
import FormField from './formField.jsx';
import SimpleButton from './button.jsx';
import constants from '../constants.js';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {rows : [
        {
          name: 'First Name', type: 'input', errorMessage: 'Not valid first name',
          validate: function(value) {
            return constants.Regex.name.test(value);
          }}, 
        {
          name: 'Last Name', type: 'input', errorMessage: 'Not valid last name',
          validate: function(value) {
            return constants.Regex.name.test(value);
          }
        },
        {
          name: 'Age', type: 'input', errorMessage: 'Not valid Age',
          validate: function(value) {
            return constants.Regex.age.test(Number(value));
          }
        },
        {
          name: 'Email', type: 'input', errorMessage: 'Not valid email',
          validate: function(value) {
            return constants.Regex.email.test(String(value).toLowerCase());
          }
        }
      ]
    }
  }
  render() {
    return (
      <div className='simple-form col-sm-6'>
        <form action="/">
          <h3 className='text-center'><label>Please fill up form</label></h3>
          {
            this.state.rows.map((r) => 
              <FormField 
                name={r.name} 
                type={r.type}
                key={r.name.toString()} 
                errorMessage={r.errorMessage}
                validate={r.validate}
              />)
          }
          <div className='text-center col-sm-12'>
            <SimpleButton value='MyButton' text='Submit' className="btn btn-primary form-btn" />
            <SimpleButton value='MyButton' text='Cancel' className="btn btn-default form-btn" />
          </div>
        </form>
      </div>
    );
  }
}
export default Form;

