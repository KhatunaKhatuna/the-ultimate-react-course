import { useState } from "react";
import "./Steps.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState("true");

  function hendlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function hendleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  return (
    <div className="container" style={{ position: "relative" }}>
      <div>
        <h2 className="challenge" style={{ marginBottom: "100px" }}>
          Challenge 2
        </h2>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
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
                Prtevious
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={hendleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
