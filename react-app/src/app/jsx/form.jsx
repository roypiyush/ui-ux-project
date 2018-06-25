import React from 'react';
import FormField from './formField.jsx';
import SimpleButton from './button.jsx';

class Form extends React.Component {
   render() {
      return (
          <div>
            <form action="/">
              <FormField name="First Name"/>
              <FormField name="Last Name"/>
              <FormField name="Age"/>
              <FormField name="Email"/>
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

