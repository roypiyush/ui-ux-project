import React from 'react';
import Form from './jsx/form.jsx';
import Table from './jsx/table.jsx';
import NavigationBar from './jsx/navbar.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
    this.state = {
      currentTab: "addUser",
      bars:[
        { id: 'addUser', name: 'Add User'},
        { id: 'listUser', name: 'List Users'},
        { id: 'printUser', name: 'Print Users' }
      ]
    }
    console.log("constructor called");
  }

  componentWillMount() {
    console.log("Component to mount " + window.location.hash );
    this.state.bars.map((b) => {
      if (!window.location.hash) {
        if (b.id === "addUser") {
          b.className = "active";
        }
      }
      else if (window.location.hash && b.id === window.location.hash.substr(1)) {
        b.className = "active";
      }
    });
    this.setState(this.state);
  }
  render() {

    var navigationBar = () => {
      return (
        <div><NavigationBar bars={this.state.bars}
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
      <div className='container'>
        {navigationBar()}
        {form()}
        {table()}
      </div>
    );
  }
}
export default App;

