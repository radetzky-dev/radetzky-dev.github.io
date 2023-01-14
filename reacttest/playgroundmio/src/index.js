import React, { props } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

//Commentare e scommentare per vedere (altrimenti tiene solo ultimo)
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(React.createElement("h1",null,"Questo è il mio titolo"));

//const title = React.createElement("h2",null,"Questo è un altro titolo");
//root.render(title);

/*
const list = React.createElement(
  "div",
  null,
  React.createElement("h1",{className:"title"},"To do list"),
  React.createElement(
    "ul",
    {className:"lista"},
    React.createElement("li",null,"attività 1"),
    React.createElement("li",null,"attività 2"),
    React.createElement("li",null,"attività 2"),
    )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(list);
*/

//Lista 2
/*
const items = ["attività 1","attività 2","attività 3"];
const list = React.createElement(
  "div",
  null,
  React.createElement("h1",{className:"title"},"To do list"),
  React.createElement(
    "ul",
    {className:"lista"},
    items.map(num => React.createElement ("li",null,num))
    )
);
console.log (list)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(list);
*/

//Lista 3
/*
function NumberList(props) {
  console.log (props);
  const numbers = props.items;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const items = ["attività 1","attività 2","attività 3"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList items={items} />);
*/

//SLIDE 15
/*
function ingredientList() {
  return React.createElement(
    "ul",
    { className: "ingredienti" },
    React.createElement("li", null, "1 cup"),
    React.createElement("li", null, "1 crunch"),
    React.createElement("li", null, "2 eggs"),
    React.createElement("li", null, "1 tea"),
    React.createElement("li", null, "2 milk")
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (React.createElement(ingredientList,null,null));
*/

//SLIDE 16
/*
function ingredientList(props) {
  console.log(props.items);
  return React.createElement(
    "ul",
    { className: "ingredienti" },
    props.items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  );
}

const myIngredients = [
  "1 cup",
  "1 crunh",
  "1 egg",
  "1 tea",
  "1 milk",
  "1 apple",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  React.createElement(ingredientList, { items: myIngredients }, null),  
);
*/

//SLIDE 17
function ingredientList(props) {
  console.log(props.items);
  return React.createElement(
    "ul",
    { className: "ingredienti" },
    props.items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  );
}

const myIngredients = [
  "1 cup",
  "1 crunh",
  "1 egg",
  "1 tea",
  "1 milk",
  "1 apple",
];

function threeColumns() {
  return React.createElement(
    "div",
    { className: "colonna" },
    React.createElement(ingredientList, { items: myIngredients }, null),
    React.createElement(ingredientList, { items: myIngredients }, null),
    React.createElement(ingredientList, { items: myIngredients }, null),
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (React.createElement(threeColumns,null,null));

//ReactDOM.render (title,document.getElementById('h1'));

/* scommentare
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}
root.render(React.createElement(Hello, {toWhat: 'World'}, null));
*/

/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
