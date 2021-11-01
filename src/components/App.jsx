import React from "react";

function App() {
  // we can destruct the state Array by giving a name to it
  const [count, setCount] = React.useState(0); //this number inside the useState function is the initial value of the useState funcction

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
