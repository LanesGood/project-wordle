import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessForm from '../GuessForm/GuessForm';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const addNewGuess = (label) => {
    const newGuess = { label, id: `${label}-${Math.random()}` };
    setGuesses([...guesses, newGuess]);
  };
  const win = guesses.some((guess) => guess.label === answer);
  const lose = guesses.length === NUM_OF_GUESSES_ALLOWED;
  const GAME_OVER = win || lose
  return (
    <>
      {(win || lose) && (
        <Banner numGuesses={guesses.length} answer={answer} win={win} />
      )}
      <GuessList guesses={guesses} answer={answer} />
      <GuessForm addNewGuess={addNewGuess} enabled={!GAME_OVER} />
    </>
  );
}

export default Game;
