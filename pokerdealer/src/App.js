import React, {Component} from 'react';
import './App.css';
import Table from './components/Table.js';

class App extends Component {

  state = {
    seat1: {
        player: "Bob",
        chips: 1000,
        action: false
      },
    seat2: {
      player: "Mike",
      chips: 1000,
      action: false
    },
    seat3: {
      player: "Joe",
      chips: 1000,
      action: false
    },
    seat4: {
      player: "Dave",
      chips: 1000,
      action: false
    },
    seat5: {
      player: "Sue",
      chips: 1000,
      action: false
    },
    seat6: {
      player: "Mary",
      chips: 1000,
      action: false
    },
    currentWager: 0
  }

  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;
