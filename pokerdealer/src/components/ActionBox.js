import React from 'react';
import '../App.css';

function ActionBox(props) {
  return (
    <div className="ActionBox">
        <button>Check</button>
        <button>Bet</button>
        <button>Raise</button>
        <button>Fold</button>
        <button onClick={props.dealFlop}>Deal Flop</button>
        <button onClick={props.dealTurn}>Deal Turn</button>
        <button onClick={props.dealRiver}>Deal River</button>
        <button onClick={props.dealNewHand}>Deal New Hand</button>
    </div>
  );
}

export default ActionBox;
