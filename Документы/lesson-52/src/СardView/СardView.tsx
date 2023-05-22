import React from 'react';

interface ICardProps {
    rank: string | number;
    suit: string;
}

const CardView: React.FC<ICardProps> = props => {

    let cardClasses = `card rank-${props.rank} ${props.suit}`;
    cardClasses = cardClasses.toLowerCase();

    let symbol;

    if (props.suit === 'diams') {
        symbol = '♦';
    } else if (props.suit === 'hearts') {
        symbol = '♥';
    } else if (props.suit === 'clubs') {
        symbol = '♣';
    } else if (props.suit === 'spades') {
        symbol = '♠';
    }
    return (
        <span className={cardClasses}>
           <span className="rank">{props.rank}</span>
          <span className="suit">{symbol}</span>
        </span>
    );
};

export default CardView;