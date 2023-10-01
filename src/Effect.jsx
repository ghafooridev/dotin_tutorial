import { useEffect, useState, useLayoutEffect } from "react";

function App() {
  const [name, setName] = useState("");
  // const [theme, setTheme] = useState("dark");

  useLayoutEffect(() => {
    const element = document.getElementById("input");

    element.value = "layout";

    console.log("layout effect");
  }, []);

  useEffect(() => {
    const element = document.getElementById("input");

    setTimeout(() => {
      element.value = "effect";
    }, 1000);
    console.log("effect");
  }, []); // mounting

  // useEffect(() => {
  //  console.log("render2");
  // return () => {
  //   // responsible for cleaning up
  //   console.log("render3");
  // };
  // }, [theme]);

  // name ='' -> name='a'

  // useEffect(() => {
  //   if (theme === "light") setName(`${name} in the ${theme} mode`);
  // }, [theme]);

  return (
    <div>
      {/* <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        change theme
      </button> */}

      <input
        id="input"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <h1>{name}</h1>
    </div>
  );
}

export default App;

// import { useEffect } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() {
//   useEffect(() => {
//     console.log("render Home");
//     return () => {
//       console.log("clean up Home");
//     };
//   }, []);
//   return <h1>Home</h1>;
// }

// function PageA() {
//   useEffect(() => {
//     console.log("render Page A");
//   }, []);
//   return <h1>PageA</h1>;
// }

// function PageB() {
//   return <h1>PageB</h1>;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div
//         style={{
//           display: "flex",
//           width: "100%",
//           justifyContent: "space-around",
//         }}
//       >
//         <Link to="/">Home</Link>
//         <Link to="/pageA">Page A</Link>
//         <Link to="/pageB">Page B</Link>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/pageA" element={<PageA />}></Route>
//         <Route path="/pageB" element={<PageB />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
