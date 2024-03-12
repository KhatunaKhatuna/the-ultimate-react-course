import { useState } from "react";

export default function DataCounterRange() {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);

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

  function handleReset() {
    setCount(0);
    setRange(1);
  }
  return (
    <div className="container">
      <div style={styles.dateCounter}>
        <input
          type="range"
          min="0"
          max="10"
          style={styles.range}
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
        <span style={{ fontSize: "26px" }}>{range}</span>

        <button
          onClick={() => setCount((prev) => prev - range)}
          style={styles.dateCounterButtons}
        >
          -
        </button>
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          tipe="text"
          style={styles.input}
        />
        <button
          onClick={() => setCount((prev) => prev + range)}
          style={styles.dateCounterButtons}
        >
          +
        </button>

        <h3 style={styles.text}>
          {renderDateMessage()}

          {date.toDateString()}
        </h3>

        <button onClick={handleReset} style={styles.reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  dateCounter: {
    // width: "600px",
    borderRadius: "7px",
    padding: "35px",
    backgroundColor: " #b1aaaa",
    display: "grid",

    gridTemplateColumns: "repeat(4, 150px)",
    gridTemplateRows: "repeat(4, auto)",
    justifyItems: "center",
    alignItems: "center",
    gap: "25px",
  },
  dateCounterButtons: {
    display: "inline-block",
    padding: "8px 50px",
    borderRadius: "7px",
    backgroundColor: "#7950f2",
    color: "#fff",
    fontSize: "22px",
  },
  input: {
    padding: "8px",
    fontSize: "24px",
    borderRadius: "7px",
    gridColumn: "2/4",
    gridRow: "2/3",
  },
  range: {
    width: "60%",
    gridColumn: "1/4",
    backgroundColor: "magenta",
  },
  text: {
    marginTop: "40px",
    fontSize: "26px",
    textAlign: "center",
    gridColumn: "1/-1",
    gridRow: "3/4",
  },
  reset: {
    display: "inline-block",
    padding: "8px 50px",
    borderRadius: "7px",
    backgroundColor: "#7950f2",
    color: "#fff",
    fontSize: "22px",
    gridColumn: "1/-1",
    gridRow: "4/5",
  },
};
