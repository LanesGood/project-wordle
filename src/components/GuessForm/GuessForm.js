import React, { useState } from 'react';

function GuessForm({ addNewGuess, enabled }) {
  const [guess, setGuess] = useState('');
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNewGuess(guess);
          setGuess('');
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter Guess</label>
        <input
          type="text"
          id="guess-input"
          name="guess-input"
          value={guess}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          disabled={!enabled}
        />
      </form>
    </div>
  );
}

export default GuessForm;
