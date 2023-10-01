import { useState } from "react";
// import { flushSync } from "react-dom";

function App() {
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState("red");
  const [state, setState] = useState({
    count: 0,
    color: "red",
    name: "ali",
    age: 30,
  });

  const onIncrement = () => {
    // setState({ count: state.count + 1 });
    setState({ ...state, count: state.count + 1 });
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // flushSync(() => setCount(count + 1));
    // setColor("blue");
  };

  const onDecrement = () => {
    // setCount(count - 1);
    // setColor("green");
  };
  console.log("render");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <button onClick={onIncrement}>+</button>
      {state.count}-{state.color}
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default App;
