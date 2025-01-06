import { useState, useRef, useEffect } from "react";

function UseRef() {
  const [count, setCount] = useState(0); // State for the current count
  const prevCountRef = useRef(); // Ref to store the previous count

  useEffect(() => {
    prevCountRef.current = count; // Update the previous count after render
  });

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter with Previous Value</h1>
      <p>Current Value: {count}</p>
      <p>Previous Value: {prevCountRef.current || 0}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseRef;
