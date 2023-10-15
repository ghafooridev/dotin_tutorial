import { useEffect, useRef } from "react";

const useKeyDown = (callback, keys) => {
  const onKeyDown = (event) => {
    // console.log(event.key);
    const wasKeyPressed = keys.some((key) => event.key === key);
    if (wasKeyPressed) {
      event.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
};

function App() {
  const inputRef = useRef();

  useKeyDown(() => {
    inputRef.current.style.background = "red";
  }, ["Enter"]);

  useKeyDown(() => {
    inputRef.current.value = "";
  }, ["Escape"]);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}

export default App;
