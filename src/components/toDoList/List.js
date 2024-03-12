const list = [
  {
    id: 1,
    value: " workout",
    packed: false,
  },
  {
    id: 2,
    value: "Learn",
    packed: false,
  },
  {
    id: 3,
    value: "Code",
    packed: true,
  },
];

export default function List({ items, onDeleteItem, ToggleItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          ToggleItem={ToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, ToggleItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input
          value={item.packed}
          onChange={() => ToggleItem(item.id)}
          type="checkbox"
        />
        {item.value}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
// ( <p key={item.id}>{item.text}</p>)
