import { useState } from 'react'
import './App.css';
import Flashcard from './components/Flashcard.jsx';
import { pokemonData } from './pokemonData';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function getRandomIndex() {
    return Math.floor(Math.random() * pokemonData.length);
  }

  function getNext (){
    const randomIndex = getRandomIndex();
    setCurrentIndex(randomIndex);
  }

  function getPrev(){
    const randomIndex = getRandomIndex();
    setCurrentIndex(randomIndex);
  }

  const currentPokemon = pokemonData[currentIndex];

  return (
    <div className="App">
      <div className="header">
        <h1>Who's That Pokemon</h1>
        <p>Are you able to guess pokemon? Hint: The color is related to its type.</p>
        <h2>Card Count: {pokemonData.length}</h2>
      </div>
      <div className="card-container">
        <Flashcard pokemon={currentPokemon}/>
          <div className="btn-row">
            <button onClick={getPrev} className="arrow-btn">⇦</button>
            <button onClick={getNext} className="arrow-btn">⇨</button>
          </div>
      </div>
    </div>
  )
}

export default App
