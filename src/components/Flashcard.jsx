import { useState, useEffect } from 'react';

export default function Flashcard ({ pokemon }) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(false);
        }, [pokemon]);

    return (
        <div 
            className={`flashcard-container ${pokemon.type}`}
            onClick={() => setIsFlipped(!isFlipped)}    
        >
            <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className={`flashcard-front ${pokemon.type}`}>
                    <p className="flashcard-text">Click to reveal!</p>
                    <img
                        src={pokemon.image}
                        alt="Guess this Pokemon"
                        className="pokemon-image"
                    />
                </div>
                <div className={`flashcard-back ${pokemon.type}`}>
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                    <span className="pokemon-type">{pokemon.type}</span>
                </div>
            </div>
        </div>
    );
}