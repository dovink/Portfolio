import React from "react";
import Line from "./Line";

const Guesses = ({ guesses, currentGuess, correctWord }) => {
  const firstEmptyGuessIndex = guesses.findIndex((val) => val == null);

  return (
    <div className="guesses_container">
      <header className="game_header">Wordle</header>
      {guesses.map((guess, index) => {
        const isCurrentBlock = index === firstEmptyGuessIndex;
        return (
          <Line
            key={index}
            guess={isCurrentBlock ? currentGuess : guess ?? ""}
            isFinal={!isCurrentBlock && guess != null}
            correctWord={correctWord}
          />
        );
      })}
      {firstEmptyGuessIndex !== -1 && (
        <div className="instructions">
          <p>Type a word using your keyboard and press Enter to submit.</p>
        </div>
      )}
    </div>
  );
};

export default Guesses;
