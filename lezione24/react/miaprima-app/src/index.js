import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function NumberList(props) {
  //console.log(props);
  const numbers = props.items;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

const items = [
  "attività X",
  "attività prova",
  "attività ec",
  "attività AAA",
  "attività ZZZ",
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList items={items} />);
