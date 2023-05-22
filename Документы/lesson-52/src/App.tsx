import React from 'react';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/CardDeck";
import './cards.css';
import './App.css';


function App() {

    const cardDeck = new CardDeck();
     const randomCArd = cardDeck.getCards(5)
    console.log(randomCArd);
    return (
    <div className="App">
      <CardView rank="q" suit="diams"/>
    </div>
  );
}

export default App;
