import { useState } from "react";
import "./Steps.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <div className="container">
      <div>
        <h2 className="challenge" style={{ marginBottom: "70px" }}>
          Challenge 2
        </h2>
        <button
          className="close"
          onClick={() => setIsOpen((isopen) => !isopen)}
        >
          &times;
        </button>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <Step step={step}>{messages[step - 1]}</Step>

            <div className="buttons">
              <Button
                bgColor="#7950f2"
                textColor="#fff"
                onClick={handlePrevious}
              >
                <span>👈️ </span>previous
              </Button>
              <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                Next <span>👉️</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Step({ step, children }) {
  return (
    <p className="message">
      Step {step}:{children}
    </p>
  );
}

function Button({ bgColor, children, textColor, onClick }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
