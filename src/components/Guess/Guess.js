import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const letters = guess && checkGuess(guess.label, answer);
  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <span
            className={letters ? `cell ${letters[i].status}` : 'cell'}
            key={i}
          >
            {letters ? letters[i].letter : ''}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
