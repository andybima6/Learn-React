import React, { useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  const minus = () => {
    setAngka(angka - 1);
  };

  const plus = () => {
    setAngka(angka + 1);
  };
  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{angka}</span>
      <button onClick={plus}>+</button>
    </div>
  );
}
export default Counter;
