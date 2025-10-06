import React, { useEffect, useState } from "react";

export default function MyEffect() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    let span = document.getElementById("my-span");
    span.innerHTML = count;
  }, [count]);

  return (
    <div>
      <h1>Count {count} </h1>
      <span id="my-span"></span>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
