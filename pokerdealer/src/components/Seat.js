import React from 'react';
import '../App.css';
import Player from './Player.js';
import Hand from './Hand.js';

function Seat(props) {
  return (
    <div className={`Seat${props.position}`}>
      <Player />
      <Hand />
    </div>
  );
}

export default Seat;
