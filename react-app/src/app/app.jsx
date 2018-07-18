import React from 'react';
import Form from './jsx/form.jsx';
import Table from './jsx/table.jsx';
import NavigationBar from './jsx/navbar.jsx';

class App extends React.Component {
  render() {

    var navigationBar = () => {
      return (
        <div><NavigationBar bars={[
          { id: 'addUser', name: 'Add User', className: 'active'},
          { id: 'listUser', name: 'List Users'},
          { id: 'printUser', name: 'Print Users' }
        ]}
          name='User Management'
        /></div>
      )
    }
    var form = () => {
      return (
        <div id='addUser' className='active'>
          <Form className='simple-form col-sm-12' />
        </div>)
    }
    var table = () => {
      return <div id='listUser'>
        <Table headers={['#', 'First Name', 'Last Name', 'Email', 'Age']} />
      </div>
    }
    return (
      <div>
        {navigationBar()}
        {form()}
        {table()}
      </div>
    );
  }
}
export default App;

