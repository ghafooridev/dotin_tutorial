import { useState, useContext, createContext } from "react";

const themeContext = createContext();

const Component1 = () => {
  const { theme, changeTheme } = useContext(themeContext);
  return (
    <div>
      <h1 style={theme === "dark" ? { color: "white" } : { color: "black" }}>
        Component1
      </h1>
      <button onClick={changeTheme}>change Theme</button>
    </div>
  );
};

const Component2 = () => {
  const { theme } = useContext(themeContext);
  return (
    <h1 style={theme === "dark" ? { color: "white" } : { color: "black" }}>
      Component2
    </h1>
  );
};

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      style={
        theme === "dark" ? { background: "black" } : { background: "white" }
      }
    >
      <themeContext.Provider value={{ theme, changeTheme }}>
        <Component1 />
        <Component2 />
      </themeContext.Provider>
    </div>
  );
}

export default App;
