import { useState } from 'react'
import './App.css';
import Flashcard from './components/Flashcard.jsx';
import { pokemonData } from './pokemonData';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState ('');
  const [feedback, setFeedback] = useState ('');
  const currentPokemon = pokemonData[currentIndex];

  const handleGuessSubmit = (e) => {
    e.preventDefault();

    if (userGuess.trim().toLowerCase() === currentPokemon.name.toLowerCase()) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  const resetGuessState = () => {
    setUserGuess('');
    setFeedback('');
  };

  function getRandomIndex() {
    return Math.floor(Math.random() * pokemonData.length);
  }

  function getNext (){
    if (currentIndex < pokemonData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetGuessState();
    }
  }

  function getPrev(){
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetGuessState();
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Who's That Pokemon</h1>
        <p>Are you able to guess pokemon? Hint: The color is related to its type.</p>
        <h2>Card Count: {pokemonData.length}</h2>
      </div>
      <div className="card-container">
        <Flashcard pokemon={currentPokemon}/>
          
          <form onSubmit={handleGuessSubmit} className="guess-form">
            <label htmlFor="pokemon-input" className="guess-label">Guess The Pokemon!</label>
            <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Type your guess..."
            className="guess-input"
            />
            <button type="submit" className="submit-btn">Submit</button>
          </form>

          <div className="feedback-container">
            {feedback === 'correct' && <p className="feedback-text correct">That's right!</p>}
            {feedback === 'incorrect' && <p className="feedback-text incorrect">Nope! That's wrong!</p>}
          </div>


          <div className="btn-row">
            <button onClick={getPrev} className={"arrow-btn " + (currentIndex === 0 ? "disabled" : "")}
                disabled={currentIndex === 0}
            >⇦</button>
            <button
              onClick={getNext} 
              className={"arrow-btn " + (currentIndex === pokemonData.length - 1 ? "disabled" : "")}
              disabled={currentIndex === pokemonData.length - 1}
            >⇨</button>
          </div>
      </div>
    </div>
  )
}

export default App
