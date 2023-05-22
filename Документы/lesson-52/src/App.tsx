import React, {useState} from 'react';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand"
import './cards.css';
import './App.css';


function App() {

    const [cards, setCards] = useState<Card[]>([]);

    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        setCards(newCards);
    };

    if (cards.length === 0) {
        return <button onClick={getCards}>Раздать карты</button>
    }

    const pokerHand = new PokerHand(cards);
    const outcome = pokerHand.getOutcome();

    return (
        <div className="App">
            <div className="playingCards faceImages">
                {cards.map((card, index) => (
                    <CardView key={index} rank={card.rank} suit={card.suit}/>
                ))}
            </div>
            <button onClick={getCards}>Раздать карты</button>
            <div>
                <div>Текущая комбинация: {outcome}</div>
            </div>
        </div>
    );

}

export default App;
