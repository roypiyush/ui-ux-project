import React from 'react';
import Form from './jsx/form.jsx';
import Table from './jsx/table.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
        <Form className='simple-form col-sm-12' />
        <Table headers={['#', 'First Name', 'Last Name', 'Email', 'Age']} />
      </div>
    );
  }
}
export default App;

