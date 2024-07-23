import { useEffect } from "react";
import { useState } from "react";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));

    if (value >= 100) onComplete();
  }, [value, onComplete]);

  return (
    <>
      <div className="progress__bar--container">
        <div
          className="progress__bar--fill"
          style={{
            transform: `scaleX(${value / 100})`,
            transformOrigin: "left",
          }}
        ></div>
        <p className="progress__bar--percent">{percent.toFixed()}%</p>
      </div>
    </>
  );
};

export default ProgressBar;
