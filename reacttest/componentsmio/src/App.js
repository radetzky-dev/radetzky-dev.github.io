import './App.css';
//NOTA se la prima lettera non è maiuscola non va
import CiaoMondo from './components/CiaoMondo';  
import React, { useState } from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Hw(props) {
  return <p>Hello {props.name}</p>;
}


function ClickButton() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked <b>{count} </b> times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome name="Sara" />
      <CiaoMondo name="Paolo"/>
      <Hw name="Mario"/>
      <ClickButton></ClickButton>
    </div>
  );
}

export default App;
