import React from 'react';
import '.././stylesheets/App.scss';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div className="App App-header">
        <h1>Pintar listados con React:</h1>
        <List />
      </div>
    );
  }
}
// comentario
export default App;
