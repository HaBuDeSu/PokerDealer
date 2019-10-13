import React from 'react';
import '../App.css';

function Card(props) {
  return (
    <div className="Card">
        {props.rank}
        {props.suit}
    </div>
  );
}

export default Card;
