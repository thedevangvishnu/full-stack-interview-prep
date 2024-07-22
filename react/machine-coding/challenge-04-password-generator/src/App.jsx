import { useEffect, useRef, useState } from "react";
import { usePassword } from "./hooks/use-password";
import PasswordOption from "./components/Password-Option";

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
  let [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const { generatePassword, calculateStrength } = usePassword();

  const handleGeneratePassword = (
    passLength,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  ) => {
    // clear the last timeout and reset copied state everytime a new password is generated
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCopied(false);

    let value = generatePassword(
      passLength,
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol
    );
    let strength = calculateStrength(value);
    setPassword({
      ...password,
      value,
      strength,
      length: value.length,
    });
  };

  const handleCopy = () => {
    setCopied(true);
    if (password.value) {
      navigator.clipboard.writeText(password.value);

      timerRef.current = setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

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
              <button onClick={handleCopy}>
                {!copied ? "COPY" : "COPIED"}
              </button>
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
          <PasswordOption
            id="lowercase"
            checked={includesLowerCaseLetters}
            onChange={(e) =>
              setPassword({
                ...password,
                includesLowerCaseLetters: e.target.checked,
              })
            }
            labelTitle="Include Lowercase Letters"
          />

          <PasswordOption
            id="uppercase"
            checked={includesUpperCaseLetters}
            onChange={(e) =>
              setPassword({
                ...password,
                includesUpperCaseLetters: e.target.checked,
              })
            }
            labelTitle="Include UpperCase Letters"
          />

          <PasswordOption
            id="numbers"
            checked={includesNumbers}
            onChange={(e) =>
              setPassword({
                ...password,
                includesNumbers: e.target.checked,
              })
            }
            labelTitle="Include Numbers"
          />

          <PasswordOption
            id="symbols"
            checked={includesSymbols}
            onChange={(e) =>
              setPassword({
                ...password,
                includesSymbols: e.target.checked,
              })
            }
            labelTitle="Include Symbols"
          />
        </div>

        <button
          onClick={() =>
            handleGeneratePassword(
              length,
              includesUpperCaseLetters,
              includesLowerCaseLetters,
              includesNumbers,
              includesSymbols
            )
          }
        >
          GENERATE
        </button>
      </div>
    </main>
  );
}

export default App;
