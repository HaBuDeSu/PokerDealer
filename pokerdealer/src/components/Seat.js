import React from 'react';
import '../App.css';
import Player from './Player.js';
import Hand from './Hand.js';

function Seat(props) {
  return (
    <div className={`Seat${props.data.position}`}>
      <Player />
      <Hand key={props.data} card1={props.data.card1} card2={props.data.card2}/>
    </div>
  );
}

export default Seat;
