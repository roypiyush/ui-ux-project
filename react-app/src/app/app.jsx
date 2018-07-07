import React from 'react';
import Form from './jsx/form.jsx';
import ListItems from './jsx/table.jsx';


class App extends React.Component {
   render() {
      return (
            <div>
                  <Form className='simple-form col-sm-12'/>
                  <ListItems headers={['#', 'fname']}/>
            </div>
      );
   }
}
export default App;

