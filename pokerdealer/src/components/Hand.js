import React from 'react';
import '../App.css';

function Hand(props) {
  return (
    <div className="Hand">
        <img src={props.card1.image} alt="card"/>
        <img src={props.card2.image} alt="card"/>
    </div>
  );
}

export default Hand;
