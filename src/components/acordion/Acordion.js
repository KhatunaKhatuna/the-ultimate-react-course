import { useState } from "react";
import AcordionItem from "./AcordionItem";
import "./Acordion.css";
const items = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatu libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione. libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione. libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione. libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione.",
    list: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dm",
    ],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatu libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione. libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione. libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione. libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione.",
    list: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dm",
    ],
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatu libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione. libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione. libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione. libero distinctio nulla officia rerum, cum unde est vitae. Quod, ratione.",
    list: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dm",
    ],
  },
];

export default function Acordion() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="acordionWrapper">
      <div className="AcordionContainer">
        {items.map((item) => (
          <AcordionItem
            key={item.id}
            id={item.id < 10 ? "0" + item.id : item.id}
            title={item.title}
            list={item.list.map((listItem) => (
              <li key={item.id}>{listItem}</li>
            ))}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            {item.text}
          </AcordionItem>
        ))}
      </div>
    </div>
  );
}
