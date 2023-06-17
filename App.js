import React from "react";
import ReactDOM from "react-dom/client";
const element = React.createElement('h1',{
    id:"heading"
},'Hello React');
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(element);

root.render(element);
//JSX syntax
const jsxheading = <h1 id="heading">This is our first JSX heading</h1>
console.log(jsxheading)
root.render(jsxheading)
