import React from 'react';
import '../App.css';
import Card from './Card.js';

function Hand() {
  return (
    <div className="Hand">
        <Card suit={"Spade"} rank={"A"}/>
        <Card suit={"Club"} rank={"A"}/>
    </div>
  );
}

export default Hand;
