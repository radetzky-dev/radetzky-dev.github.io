import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


function ingredientList(props) {
  console.log(props.items);
  return React.createElement(
    "ul",
    { className: "textclass" },
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

const otherIngredients = [
  "1 piatto",
  "1 pane",
  "1 farina",
  "1 mandorle",
];

const lastIngredients = [
  "1 mug",
  "1 cavolo",
  "1 miele",
  "1 brodo",
];

function threeColumns() {
  return React.createElement(
    "div",
    { className: "colonna" },
    React.createElement(ingredientList, { items: myIngredients }, null),
    React.createElement(ingredientList, { items: otherIngredients }, null),
    React.createElement(ingredientList, { items: lastIngredients }, null)
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(threeColumns, null, null));
