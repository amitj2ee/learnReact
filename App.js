import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement('h1',{
    id:"heading"
},'Hello React');

//console.log(element);

//root.render(element);
//JSX syntax
const jsxheading = <h1 id="heading">This is our first JSX heading</h1>
console.log(jsxheading)
//root.render(jsxheading)

//JSX Elements
const TitElement =(
    <h1 className="jelement">
        Its a react element
    </h1>
);

//Functional components
const Title =()=>(
     <h1 className="title"> Title of the page</h1>
)

const HeadComponent = ()=>(
    <div id="Container">
         <Title />
     <h1 className="comp">My first funnctional component</h1>
    </div>
   
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent />);

