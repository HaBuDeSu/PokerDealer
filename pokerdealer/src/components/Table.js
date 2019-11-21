import React from 'react';
import '../App.css';
import table from '../Table.png';
import Seat from './Seat';
import axios from 'axios';
import ActionBox from './ActionBox';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: [],
      seats: [
        {position: 1, player: "", stack: 1000, card1: {}, card2: {}, button: true, SB: false, BB: false, action: false, live: true, bet: 0},
        {position: 2, player: "", stack: 1000, card1: {}, card2: {}, button: false, SB: true, BB: false, action: false, live: true, bet: 0},
        {position: 3, player: "", stack: 1000, card1: {}, card2: {}, button: false, SB: false, BB: true, action: false, live: true, bet: 0},
        {position: 4, player: "", stack: 1000, card1: {}, card2: {}, button: false, SB: false, BB: false, action: true, live: true, bet: 0},
        {position: 5, player: "", stack: 1000, card1: {}, card2: {}, button: false, SB: false, BB: false, action: false, live: true, bet: 0},
        {position: 6, player: "", stack: 1000, card1: {}, card2: {}, button: false, SB: false, BB: false, action: false, live: true, bet: 0},
      ],
      board: [],
      action: {seat: 4, bet: 10},
      BB: 10,
      SB: 5
    }
  }

  bet = (position, size) => {
    this.setState({
      
    })
  }

  async componentDidMount() {
    await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=${this.state.seats.length*2}`)
      .then(res => this.setState({deck: res.data}))
    let newSeats = this.state.seats
    for (let i=0; i<this.state.seats.length*2; i++) {
      if(i<6) {
        newSeats[i].card1 = this.state.deck.cards[i]
      } else {
        newSeats[i%6].card2 = this.state.deck.cards[i]
      }
    }
    this.setState({seats: newSeats})
  }

  dealNewHand = async () => {
    await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=${this.state.seats.length*2}`)
      .then(res => this.setState({deck: res.data}))
    let newSeats = this.state.seats
    for (let i=0; i<this.state.seats.length*2; i++) {
      if(i<6) {
        newSeats[i].card1 = this.state.deck.cards[i]
      } else {
        newSeats[i%6].card2 = this.state.deck.cards[i]
      }
    }
    this.setState({
      seats: newSeats,
      board: []
    })
  }
  
  dealFlop = async () => {
    await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/?count=3`)
      .then(res =>
        this.setState({...this.state, board: [...this.state.board, ...res.data.cards]})
      )
  }

  dealTurn = async () => {
    await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/?count=1`)
      .then(res => this.setState({...this.state, board: [...this.state.board, res.data.cards[0]]}))
  }

  dealRiver = async () => {
    await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/?count=1`)
      .then(res => this.setState({...this.state, board: [...this.state.board, res.data.cards[0]]}))
  }

  render() {
    return (
      <div className="Table">
        <div>
            <img src={table} alt="table"/>
            <div className="board">
              {this.state.board.map(card => <img src={card.image} alt="card"/>)}
             </div>
            {this.state.seats.map(seat => <Seat key={seat.position} data={seat}/>)}
        </div>
        
        <ActionBox
          dealNewHand={this.dealNewHand}
          dealFlop={this.dealFlop}
          dealTurn={this.dealTurn}
          dealRiver={this.dealRiver}
        />
      </div>
    );
  }
  
}

export default Table;
