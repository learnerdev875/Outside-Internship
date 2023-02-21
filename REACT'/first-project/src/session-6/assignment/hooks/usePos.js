import { useState } from "react";
export default function usePos() {
  const [pos, setPos] = useState({
    x: null,
    y: null,
  });

  function handleMouseMove(e) {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return [pos, handleMouseMove];
}
