import { useState } from "react";

export default function Form({ onAddItems }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    const newItem = { value, packed: false, id: Date.now() };
    // if (value.trim() !== "" && value.length >= 3) {
    onAddItems(newItem);
    // }
    setValue("");
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <form style={{ marginBottom: "20px " }} onSubmit={handleSubmit}>
      <input
        style={{ border: "solid 1px #000", padding: " 10px 20px" }}
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="To Do List"
      />
      <button style={{ border: "solid 1px #000", padding: " 10px 20px" }}>
        edd
      </button>
    </form>
  );
}
