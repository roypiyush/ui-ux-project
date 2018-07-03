import React from 'react';
import FormField from './formField.jsx';
import SimpleButton from './button.jsx';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {rows : [
        {
          name: 'First Name', type: 'input', errorMessage: 'Not valid first name',
          validate: function(value) {
            var pattern = new RegExp("^[A-Z]+[a-z]+$");
            return pattern.test(value);
          }}, 
        {
          name: 'Last Name', type: 'input', errorMessage: 'Not valid last name',
          validate: function(value) {
            var pattern = new RegExp("^[A-Z][a-z]+$");
            return pattern.test(value);
          }
        },
        {
          name: 'Age', type: 'input', errorMessage: 'Not valid Age',
          validate: function(value) {
            var pattern = new RegExp("^\\d{1,3}$");
            return pattern.test(value);
          }
        },
        {
          name: 'Email', type: 'input', errorMessage: 'Not valid email',
          validate: function(value) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
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

