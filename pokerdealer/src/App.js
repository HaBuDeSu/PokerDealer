import React, {Component} from 'react';
import './App.css';
import Table from './components/Table.js';
import ActionBox from './components/ActionBox.js';

class App extends Component {

  state = {

  }

  render() {
    return (
      <div className="App">
        <Table />
        <ActionBox />
      </div>
    );
  }
}

export default App;
