// src/Rules.jsx

import React from "react";
import "./rules.css";

const Rules = ({ startGame, setStartGame, setShowRules }) => {
  const handleGameStart = () => {
    setStartGame(!startGame);
    setShowRules((prev) => !prev);
  };
  return (
    <section className="rules_container">
      <div className="rules_content">
        <h1>How to Play Wordle</h1>

        <p>
          Wordle is a simple yet addictive word puzzle game where your goal is
          to guess the correct 5-letter word within six attempts. The game will
          provide feedback on each guess to help you get closer to the correct
          word.
        </p>

        <h2>Rules</h2>

        <ol>
          <li>
            <strong>Guess the Word:</strong> You have 6 attempts to guess a
            5-letter word.
          </li>
          <li>
            <strong>Feedback on Your Guess:</strong> After each guess, the color
            of the tiles will change to show how close your guess was to the
            word:
            <ul>
              <li>
                <strong>Green:</strong> The letter is in the correct position.
              </li>
              <li>
                <strong>Yellow:</strong> The letter is in the word but in the
                wrong position.
              </li>
              <li>
                <strong>Gray:</strong> The letter is not in the word at all.
              </li>
            </ul>
          </li>
          <li>
            <strong>Correct Guess:</strong> If you guess the word correctly
            within 6 attempts, you win!
          </li>
          <li>
            <strong>Game Over:</strong> If you don't guess the word correctly
            within 6 attempts, the correct word will be revealed, and the game
            will end.
          </li>
        </ol>

        <h2>Tips</h2>

        <ul>
          <li>
            Start with a word that has a variety of vowels and consonants to
            narrow down the possibilities.
          </li>
          <li>
            Pay attention to the letters that have been ruled out to avoid
            repeating them in future guesses.
          </li>
          <li>
            Think strategically about the position of letters, especially when
            you get a yellow or green tile.
          </li>
        </ul>

        <h2>Restarting the Game</h2>

        <p>
          If you'd like to play again after the game ends, you can restart the
          game and try a new word!
        </p>

        <h2>Good Luck!</h2>
        <p>
          Enjoy the challenge and see if you can guess the word within the
          allowed attempts. Happy puzzling!
        </p>

        <button onClick={handleGameStart} className="start_game_button">
          Start Game
        </button>
      </div>
    </section>
  );
};

export default Rules;
