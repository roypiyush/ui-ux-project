import React from 'react';
import FormField from './formField.jsx';
import SimpleButton from './button.jsx';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {rows : [
        {name: 'First Name', type: 'input'}, 
        {name: 'Last Name', type: 'input'},
        {name: 'Age', type: 'input'},
        {name: 'Email', type: 'input'}
      ]
    }
  }
  render() {
    return (
      <div>
        <form action="/">
          {this.state.rows.map((r) => <FormField name={r.name} type={r.type} key={r.name.toString()} /> )}
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

