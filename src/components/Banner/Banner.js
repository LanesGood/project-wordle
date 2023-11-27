import React from 'react';

function Banner({ numGuesses, answer, win }) {
  return (
    <div className={`${win ? 'happy' : 'sad'} banner`}>
      {win ? (
        <p>
          <strong>Congratulations! </strong>
          Got it in{' '}
          <strong>
            {numGuesses === 1 ? '1 guess' : `${numGuesses} guesses`}
          </strong>
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
