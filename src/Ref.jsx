import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  // const [theme, setTheme] = useState("dark");
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    // setRenderCount((preRenderCount) => preRenderCount + 1);
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <button
        onClick={() => {
          // setTheme(theme === "dark" ? "light" : "dark");
          // inputRef.current.value = "john";
          //  inputRef.current.style.background = "red";
          inputRef.current.focus();
        }}
      >
        change input
      </button>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
      <p>{renderCount.current}</p>
    </div>
  );
}

export default App;
