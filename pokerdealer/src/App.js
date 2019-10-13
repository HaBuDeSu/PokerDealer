import React, {Component} from 'react';
import './App.css';
import Table from './components/Table.js';
import ActionBox from './components/ActionBox.js';
import Seat from './components/Seat.js';

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
        <Seat position={1}/>
        <Seat position={2}/>
        <Seat position={3}/>
        <Seat position={4}/>
        <Seat position={5}/>
        <Seat position={6}/>
        <ActionBox />
        <button>Deal New Hand</button>
      </div>
    );
  }
}

export default App;
