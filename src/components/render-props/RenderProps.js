import { useEffect, useState } from "react";

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div>{render(position)}</div>;
}

export default function RenderProps() {
  return (
    <div className="container">
      <MouseTracker
        render={({ x, y }) => (
          <p>
            The curent mouse position is ({x}, {y})
          </p>
        )}
      />
    </div>
  );
}
