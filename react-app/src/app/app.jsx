import React from 'react';
import Form from './jsx/form.jsx';
import Table from './jsx/table.jsx';
import NavigationBar from './jsx/navbar.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavigationBar bars={[
            {id: 'addUser', name: 'Add User', className: 'active'},
            {id: 'listUser', name: 'List Users'},
            {id: 'printUser', name: 'Print Users'}
          ]}  
            name='User Management'
          />
        </div>
        <div id='addUser' className='active'>
          <Form className='simple-form col-sm-12' />
        </div>
        <div id='listUser'>
          <Table headers={['#', 'First Name', 'Last Name', 'Email', 'Age']} />
        </div>
      </div>
    );
  }
}
export default App;

