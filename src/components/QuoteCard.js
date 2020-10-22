import React from 'react';
import './QuoteCard.css';

function QuoteCard({ perso }) {
    return (
      <div className="Character">
        <img
          src={perso.image}
          alt={perso.character}
        />
        <ul>
          
          <li>
            Name: {perso.character}{' '}
            {perso.quote}{' '}
          </li>
          
          
          
        </ul>
      </div>
    );
  };



export default QuoteCard;