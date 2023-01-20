import React, { useState, useEffect } from "react";

function Esempio() {
  const names = ["piero", "maria", "giovanni"];
  const [mario, setMario] = useState("mario");

  function writeConsole(name) {
    console.log("Hai premuto il bottone " + name);
  }

  useEffect(() => {
    document.title = `Ciao ${mario} `;
    return () => {
      writeConsole(mario);
    };
  });

  function saluta() {
    let index = Math.floor(Math.random() * names.length);
    setMario(names[index]);
  }

  return (
    <div>
      <p>Questo è un esempio</p>
      <button onClick={saluta}>Clicca</button>
    </div>
  );
}

export default Esempio;
