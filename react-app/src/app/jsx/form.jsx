import React from 'react';
import FormField from './formField.jsx';
import SimpleButton from './button.jsx';
import Constants from '../constants.js';
import UserStores from '../store/userstore';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {
          name: 'First Name', type: 'input', errorMessage: 'Not valid first name',
          validate: function (value) {
            return Constants.Regex.name.test(value);
          }
        },
        {
          name: 'Last Name', type: 'input', errorMessage: 'Not valid last name',
          validate: function (value) {
            return Constants.Regex.name.test(value);
          }
        },
        {
          name: 'Age', type: 'input', errorMessage: 'Not valid Age',
          validate: function (value) {
            return Constants.Regex.age.test(Number(value));
          }
        },
        {
          name: 'Email', type: 'input', errorMessage: 'Not valid email',
          validate: function (value) {
            return Constants.Regex.email.test(String(value).toLowerCase());
          }
        }
      ]
    }
  }

  handleClick() {
    const user = {
      id: Date.now(),
      fname: 'Piyush',
      lname: 'Roy',
      email: 'piyush2k13@gmail.com',
      age: '33'
    }
    UserStores.add(user);
  }

  render() {
    return (
      <div className={this.props.className}>
        <form>
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
            <SimpleButton text='Submit' className="btn btn-primary form-btn" click={this.handleClick}/>
            <SimpleButton text='Cancel' className="btn btn-default form-btn" />
          </div>
        </form>
      </div>
    );
  }
}
export default Form;

