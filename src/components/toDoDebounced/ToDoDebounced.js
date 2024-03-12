import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import useDebounce from "./hooks/useDebounce";

export default function ToDoDebounced() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const debouncedInputValue = useDebounce(inputValue, 2000); // 1000ms = 1 second

  // Effect to add item when debouncedInputValue changes and is not empty
  useEffect(() => {
    if (debouncedInputValue.trim() != "" && debouncedInputValue.length >= 3) {
      setItems((prevItems) =>
        [...prevItems, debouncedInputValue].filter(
          (word, index, self) => self.indexOf(word) === index
        )
      );
      setInputValue(""); // Clear input after adding
    }
  }, [debouncedInputValue]);
  console.log(debouncedInputValue);
  return (
    <div className="container">
      <div>
        <Form inputValue={inputValue} setInputValue={setInputValue} />
        <List items={items} />
      </div>
    </div>
  );
}
