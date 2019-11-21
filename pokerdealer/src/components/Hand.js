import React from 'react';
import '../App.css';

function Hand(props) {
  return (
    <div className={props.data.action ? "Hand action" : "Hand"}>
        <img src={props.card1.image} alt="card" className={props.data.action ? "" : "no-action"}/>
        <img src={props.card2.image} alt="card" className={props.data.action ? "" : "no-action"}/>
    </div>
  );
}

export default Hand;
