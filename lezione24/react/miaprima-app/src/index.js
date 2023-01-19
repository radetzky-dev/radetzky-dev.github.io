import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Prove from "./Prove";

const list = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "To do list"),
  React.createElement(
    "ul",
    null,
    React.createElement("li", {className: 'listclass'}, "attività 1"),
    React.createElement("li", null, "attività 2"),
    React.createElement("li", null, "attività 2")
  ),
  React.createElement("p",{className: 'textclass'},'la mia lista della spesa')
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(list);
