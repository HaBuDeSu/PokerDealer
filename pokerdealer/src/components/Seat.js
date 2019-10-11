import React from 'react';
import '../App.css';
import Player from './Player.js';
import Hand from './Hand.js';

function Seat() {
  return (
    <div className="Seat">
      <Player />
      <Hand />
    </div>
  );
}

export default Seat;
