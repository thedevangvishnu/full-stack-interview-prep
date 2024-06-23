import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <div>Hello</div>
      <input type="text" />
      <pre>{time}</pre>
    </>
  );
}

export default App;
