import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// const p1: React.ReactElement = React.createElement(
//   "p",
//   { key: 4 },
//   "This is paragraph 1"
// );
// const p2: React.ReactElement = React.createElement(
//   "p",
//   { key: 5 },
//   "This is paragraph 2"
// );
// const button: React.ReactElement = React.createElement(
//   "button",
//   { className: "myButton", key: 6 },
//   "this is the button"
// );
// const myList: React.ReactElement = React.createElement("ul", { key: 0 }, [
//   React.createElement("li", { key: 1 }, "first"),
//   React.createElement("li", { key: 2 }, "second"),
//   React.createElement("li", { key: 3 }, "third"),
// ]);
// const myDiv: React.ReactElement = React.createElement("div", null, [
//   p1,
//   p2,
//   button,
//   myList,
// ]);
// const root: ReactDOM.Root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(myDiv);
const appTitle: string = "Song App";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <>
  //   <p key="4">This is paragraph 1</p>
  //   <p key="5">This is paragraph 2</p>
  //   <button className="myButton" key="6">
  //     this is the button
  //   </button>
  //   <ul key="0">
  //     <li key="1">first</li>
  //     <li key="2">second</li>
  //     <li key="3">third</li>
  //   </ul>
  // </>

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
