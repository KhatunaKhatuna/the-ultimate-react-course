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

  function hendlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function hendleNext() {
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
            <p className="message">
              Step {step}: {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={hendlePrevious}
              >
                <span>Prtevious</span>
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={hendleNext}
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
