import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function TodoList() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }
  function ToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="container">
      <div>
        <Form onAddItems={handleAddItems} />
        <List
          items={items}
          onDeleteItem={handleDeleteItem}
          ToggleItem={ToggleItem}
        />
      </div>
    </div>
  );
}
