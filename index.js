// Creating elements using JavaScript.

// const header = (<div>
//     <h1 class="header" >Hello</h1>
//     <p>Welcome to the session</p>
//     <button class="btn" >Click</button>
// </div>);


// React with JavaScript

// const reactHandling = React.createElement("h1", {className:"head", id:reactHead, children:"Hellow React"});


// React with JSX
const jsxHeading = (<h1>Hello to JSX</h1>);

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);