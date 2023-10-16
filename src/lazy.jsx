import React, { lazy, Suspense } from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
// import App from "./useHover";
const App = lazy(() => import("./useHover"));

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Setting = () => <div>Setting</div>;

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
        <Route
          path="/app"
          element={
            <Suspense fallback={<h1>loading ...</h1>}>
              <App />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
