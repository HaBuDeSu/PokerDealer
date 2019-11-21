import React from 'react';
import '../App.css';
import dealerButton from '../dealerButton.png';

function DealerButton(props) {
  return (
    <div className="DealerButton">
        <img src={dealerButton} alt="card"/>
    </div>
  );
}

export default DealerButton;
