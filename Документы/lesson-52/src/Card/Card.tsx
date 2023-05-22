import React from 'react';

interface ICardProps {
    rank: string | number;
    suit: string;
}

const Card: React.FC<ICardProps> = props => {

    const cardClasses = `card rank-${props.rank} ${props.suit}`;
    cardClasses.toLowerCase();

    let symbol;

    if( props.suit === 'diams') {
        symbol = '♦';
    } else if (props.suit === 'hearts'){
        symbol = '♥';
    } else if (props.suit === 'clubs') {
        symbol = '♣';
    } else if(props.suit === 'spades') {
        symbol = '♠';
    }
    return (
        <div className="playingCards faceImages">
          <span className={cardClasses}>
           <span className="rank">{props.rank}</span>
          <span className="suit">{symbol}</span>
        </span>
        </div>
    );
};

export default Card;