import "./Game.css";
import React, { useCallback, useEffect, useState } from "react";
import GameEnd from "./GameEnd";
import { randomWord } from "./Utilities/randomWord";
import Guesses from "./Guesses";
import { handleEnterPress } from "./Utilities/handleEnterPress";
import { handleBackspacePress } from "./Utilities/handleBackspacePress";
import { handleLetterPress } from "./Utilities/handleLetterPress";
import GameStart from "./GameStart";
import Rules from "./Rules";
import VirtualKeyboard from "./VirtualKeyboard/VirtualKeyboard";

const Game = () => {
  const [correctWord, setCorrectWord] = useState("");
  const [isOver, setIsOver] = useState(false);
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [turn, setTurn] = useState(0);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState("");

  const triggerError = (errorMessage) => {
    setError(errorMessage);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const resetGame = useCallback(() => {
    setCorrectWord(randomWord());
    setIsOver(false);
    setGuesses(Array(6).fill(null));
    setCurrentGuess("");
    setTurn(0);
    setShowEndScreen(false);
  }, []);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  const handleKeyPress = useCallback(
    (e) => {
      if (!startGame || isOver) return;

      const isLetter = /^[a-zA-Z]$/.test(e);

      if (e === "Enter") {
        handleEnterPress(
          guesses,
          setGuesses,
          currentGuess,
          setCurrentGuess,
          correctWord,
          setIsOver,
          turn,
          setTurn,
          setShowEndScreen,
          setIsCorrect,
          triggerError
        );
        return;
      }

      if (e === "Backspace") {
        handleBackspacePress(currentGuess, setCurrentGuess);
        return;
      }

      if (isLetter) {
        handleLetterPress(e, currentGuess, setCurrentGuess, triggerError);
        return;
      }

      if (e.key === "Enter") {
        handleEnterPress(
          guesses,
          setGuesses,
          currentGuess,
          setCurrentGuess,
          correctWord,
          setIsOver,
          turn,
          setTurn,
          setShowEndScreen,
          setIsCorrect,
          triggerError
        );
      } else if (e.key === "Backspace") {
        handleBackspacePress(currentGuess, setCurrentGuess);
      } else {
        handleLetterPress(e.key, currentGuess, setCurrentGuess, triggerError);
        return;
      }
    },
    [currentGuess, isOver, guesses, correctWord, turn, startGame]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <section className="game_container" id="game">
      <div className="main_div">
        {error && <div className="error_message">{error}</div>}
        {showRules ? (
          <Rules
            startGame={startGame}
            setStartGame={setStartGame}
            setShowRules={setShowRules}
          />
        ) : startGame ? (
          <>
            <Guesses
              guesses={guesses}
              currentGuess={currentGuess}
              correctWord={correctWord}
            />
            <VirtualKeyboard onKeyPress={handleKeyPress} />
          </>
        ) : (
          <GameStart
            startGame={startGame}
            setStartGame={setStartGame}
            showRules={showRules}
            setShowRules={setShowRules}
          />
        )}
        {showEndScreen && (
          <GameEnd
            isCorrect={isCorrect}
            turn={turn}
            correctWord={correctWord}
            resetGame={resetGame}
          />
        )}
      </div>
    </section>
  );
};

export default Game;
