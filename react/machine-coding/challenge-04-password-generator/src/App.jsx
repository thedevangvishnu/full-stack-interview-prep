import { useState } from "react";

import {
  LOWERCASE__LETTERS,
  UPPERCASE__LETTERS,
  NUMBERS,
  SYMBOLS,
} from "./libs/constants";

import "./App.css";

function App() {
  const [password, setPassword] = useState({
    value: "",
    strength: "",
    length: 4,
    includesLowerCaseLetters: true,
    includesUpperCaseLetters: false,
    includesNumbers: false,
    includesSymbols: false,
  });

  function generatePassword(
    length,
    hasUpper,
    hasLower,
    hasNumbers,
    hasSymbols
  ) {}

  const {
    value,
    strength,
    length,
    includesLowerCaseLetters,
    includesNumbers,
    includesUpperCaseLetters,
    includesSymbols,
  } = password;

  return (
    <main>
      <h2 className="title">Password Generator</h2>
      <div className="generator__container">
        {value && (
          <div className="password__info">
            <div className="password ">
              <p>{value}</p>
              <button>COPY</button>
            </div>
            <div className="info">
              <p>Strength</p>
              <span>{strength}</span>
            </div>
          </div>
        )}
        <div className="password__length">
          <div className="length">
            <p>Character Length</p>
            <span>{length}</span>
          </div>
          <div className="slider">
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              onChange={(e) =>
                setPassword({ ...password, length: +e.target.value })
              }
            />
          </div>
        </div>
        <div className="password__options">
          <div className="option">
            <input
              type="checkbox"
              id="lowercase"
              checked={includesLowerCaseLetters}
              onChange={(e) =>
                setPassword({
                  ...password,
                  includesLowerCaseLetters: e.target.checked,
                })
              }
            />
            <label htmlFor="lowercase">Include Lowercase Letters</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="uppercase"
              checked={includesUpperCaseLetters}
              onChange={(e) =>
                setPassword({
                  ...password,
                  includesUpperCaseLetters: e.target.checked,
                })
              }
            />
            <label htmlFor="uppercase">Include Uppercase Letters</label>
          </div>

          <div className="option">
            <input
              type="checkbox"
              id="numbers"
              checked={includesNumbers}
              onChange={(e) =>
                setPassword({
                  ...password,
                  includesNumbers: e.target.checked,
                })
              }
            />
            <label htmlFor="numbers">Include numbers</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="symbols"
              checked={includesSymbols}
              onChange={(e) =>
                setPassword({
                  ...password,
                  includesSymbols: e.target.checked,
                })
              }
            />
            <label htmlFor="symbols">Include symbols</label>
          </div>
        </div>

        <button>GENERATE</button>
      </div>
    </main>
  );
}

export default App;
