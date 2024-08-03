import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Dodaj</button>
      <button
        onClick={() => setCount((prev) => (prev === 0 ? prev : prev - 1))}
      >
        Odejmij
      </button>
      <h1>Count : {count}</h1>
    </div>
  );
};
