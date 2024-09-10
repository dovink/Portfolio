import React from "react";

const Line = ({ guess, isFinal, correctWord }) => {
  const blocks = [];

  for (let i = 0; i < 5; i++) {
    const char = guess[i];
    let className = "block";

    if (isFinal) {
      if (char === correctWord[i]) {
        className += " correct";
      } else if (correctWord.includes(char)) {
        className += " includes";
      } else {
        className += " incorrect";
      }
    }

    blocks.push(
      <div key={i} className={className}>
        {char}
      </div>
    );
  }

  return <div className="line">{blocks}</div>;
};

export default Line;
