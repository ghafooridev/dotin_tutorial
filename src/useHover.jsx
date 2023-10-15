import React, { useEffect, useState, useRef } from "react";

function useHover() {
  const [isHovering, setIsHovering] = useState(false);

  const ref = useRef();

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref.current]);

  return [ref, isHovering];
}

export default function App() {
  const [hoverRef, isHovering] = useHover();
  return (
    <div>
      <h1 ref={hoverRef}>HOVER ME !!!!</h1>
      <h2 style={isHovering ? { color: "red" } : { color: "black" }}>
        AFFECT ON ME
      </h2>
    </div>
  );
}
