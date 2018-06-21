import React from 'react';
import SimpleDiv from './simpleDiv.jsx';
import SimpleButton from './button.jsx';

class App extends React.Component {
   render() {
      return (
          <div>
            <SimpleDiv />
            <SimpleButton value='MyButton' text='Button Text' />
            <SimpleDiv />
          </div>
      );
   }
}
export default App;

