import { useState } from "react";
import "./DateCounter.css";

export default function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const increace = () => setStep((count) => count + 1);
  const decreace = () => setStep((count) => count - 1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  const renderDateMessage = () => {
    if (count === 0) {
      return "Today is ";
    } else if (count > 0) {
      return `${count} days from today is `;
    } else {
      return `${Math.abs(count)} days ago was `;
    }
  };

  return (
    <div className="container">
      <div className="dateCounter">
        <button className="dateCounter-buttons" onClick={decreace}>
          -
        </button>
        <span className="step">Step: {step}</span>
        <button className="dateCounter-buttons" onClick={increace}>
          <span>+</span>
        </button>

        <button
          className="dateCounter-buttons"
          onClick={() => setCount((count) => count - step)}
        >
          -
        </button>
        <span className="step">Count: {count}</span>
        <button
          className="dateCounter-buttons"
          onClick={() => setCount((count) => count + step)}
        >
          <span>+</span>
        </button>

        <h3 className="dateCounter-data">
          {renderDateMessage()}

          {date.toDateString()}
        </h3>
      </div>
    </div>
  );
}
