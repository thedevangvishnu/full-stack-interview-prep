import { useState } from "react";

import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setValue((val) => {
        if (val >= 100) {
          clearInterval(intervalRef.current);
          return val;
        }

        return val + 1;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="main">
      <h2>Progress Bar</h2>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <p className="success">{success ? "Success!" : "Loading..."}</p>
    </div>
  );
}

export default App;
