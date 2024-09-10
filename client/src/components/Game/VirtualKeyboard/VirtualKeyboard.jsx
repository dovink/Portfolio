import { keys } from "./Keys";
import "./VirtualKeyboard.css";

const VirtualKeyboard = ({ onKeyPress }) => {
  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard__row">
          {row.map((key) => (
            <button
              key={key}
              className="keyboard__key"
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard__row">
        <button className="keyboard__key" onClick={() => onKeyPress("Enter")}>
          Enter
        </button>
        <button
          className="keyboard__key"
          onClick={() => onKeyPress("Backspace")}
        >
          Backspace
        </button>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
