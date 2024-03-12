export default function Form({ inputValue, setInputValue }) {
  const pattern = /[^a-zA-Z]/g;
  function handleInputChange(e) {
    setInputValue(e.target.value.replace(pattern, ""));
  }
  return (
    <input
      style={{ border: "solid 1px #000", padding: " 10px 20px" }}
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Start typing..."
    />
  );
}
