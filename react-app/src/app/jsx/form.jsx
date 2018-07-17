import React from 'react';
import FormField from './formField.jsx';
import SimpleButton from './button.jsx';
import Constants from '../constants';
import Dispatcher from '../dispacher/defauldispatcher';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
    }
  }

  setFirstName(event) {
    this.setState({firstName: event.target.value});
  }
  setLastName(event) {
    this.setState({lastName: event.target.value});
  }
  setEmail(event) {
    this.setState({email: event.target.value});
  }
  setAge(event) {
    this.setState({age: event.target.value});
  }

  handleClick() {
    const user = {
      fname: this.state.firstName,
      lname: this.state.lastName,
      email: this.state.email,
      age: this.state.age
    }
    Dispatcher.dispatch({action: Constants.Actions.ADD_USER, object: user});

  }

  render() {
    var rows = [
      {
        name: 'First Name', type: 'input', errorMessage: 'Not valid first name',
        validate: function (value) {
          return Constants.Regex.name.test(value);
        },
        handleChange: this.setFirstName.bind(this)
      },
      {
        name: 'Last Name', type: 'input', errorMessage: 'Not valid last name',
        validate: function (value) {
          return Constants.Regex.name.test(value);
        },
        handleChange: this.setLastName.bind(this)
      },
      {
        name: 'Age', type: 'input', errorMessage: 'Not valid Age',
        validate: function (value) {
          return Constants.Regex.age.test(Number(value));
        },
        handleChange: this.setAge.bind(this)
      },
      {
        name: 'Email', type: 'input', errorMessage: 'Not valid email',
        validate: function (value) {
          return Constants.Regex.email.test(String(value).toLowerCase());
        },
        handleChange: this.setEmail.bind(this)
      }
    ];
  
    return (
      <div className={this.props.className}>
        <form>
          <h3 className='text-center'><label>Hi There, Tell me about yourself.</label></h3>
          {
            rows.map((r) =>
              <FormField
                name={r.name}
                type={r.type}
                key={r.name.toString()}
                errorMessage={r.errorMessage}
                validate={r.validate}
                handleChange={r.handleChange}
              />)
          }
          <div className='text-center col-sm-12'>
            <SimpleButton text='Submit' className="btn btn-primary form-btn" click={this.handleClick.bind(this)}/>
            <SimpleButton text='Cancel' className="btn btn-default form-btn" />
          </div>
        </form>
      </div>
    );
  }
}
export default Form;