import React from "react";
import "./GameStart.css";

const GameStart = ({ startGame, setStartGame, showRules, setShowRules }) => {
  const handleGameStart = () => {
    setStartGame(!startGame);
  };
  const handleOnClickRules = () => {
    setShowRules(!showRules);
  };
  return (
    <div className="start_div">
      <h1 className="game_title">Wordle Game</h1>
      <p className="subtitle">Got bored? Play a game! &#129321;</p>
      <div className="button_container">
        <button className="game_button" onClick={handleGameStart}>
          &#9654; Start Game
        </button>
        <button className="rules_button" onClick={handleOnClickRules}>
          &#8505; Rules
        </button>
      </div>
    </div>
  );
};

export default GameStart;
