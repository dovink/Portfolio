import React from "react";
import "./GameEnd.css";

const GameEnd = ({ isCorrect, correctWord, turn, resetGame }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        {isCorrect ? (
          <>
            <h1>You Win!</h1>
            <p className="solution">{correctWord}</p>
            <p>You found the word in {turn} guesses</p>
          </>
        ) : (
          <>
            <h1>Unlucky!</h1>
            <p className="solution">{correctWord}</p>
            <p>Better luck next time</p>
          </>
        )}
        <button onClick={resetGame} className="play_button">
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameEnd;
