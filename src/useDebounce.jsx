import { useEffect, useState, useRef } from "react";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef();
  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [delay, value]);

  return debouncedValue;
}

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const debouncedValue = useDebounce(value, 1000);

  const search = async () => {
    const result = await fetch(
      `https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000&title=${debouncedValue}`
    );
    const json = await result.json();
    setList(json);
  };

  useEffect(() => {
    search();
  }, [debouncedValue]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>price : {item.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
