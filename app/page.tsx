"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <p data-testid="count">Count: {count}</p>
    </div>
  );
}
