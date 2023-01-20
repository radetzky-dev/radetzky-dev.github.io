import React, { useState, useEffect } from "react";

function Esempio() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Hai cliccato ${count} volte`;
  });

  return (
    <div>
      <p>Questo è un esempio</p>
      <button onClick={() => setCount(count + 1)}>Clicca</button>
    </div>
  );
}

export default Esempio;
