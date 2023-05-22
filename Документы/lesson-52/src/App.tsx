import React, {useState} from 'react';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/CardDeck";
import './cards.css';
import './App.css';
import Card from "./lib/Card";


function App() {

    const [cards, setCards] = useState<Card[]>([]);

    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        setCards(newCards);
        console.log(cards);
    };

    if (cards.length === 0) {
        return <button onClick={getCards}>Раздать карты</button>
    }

    return (
    <div className="App">
        {cards.length > 0 && (
            <div className="playingCards faceImages">
                {cards.map((card, index) => {
                    return <CardView key={index} rank={card.rank} suit={card.suit}/>
                })}
            </div>
        )}
        <button onClick={getCards}>Раздать карты</button>
    </div>
  );
}

export default App;
