import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./App";
import * as serviceWorker from "./serviceWorker";

const Form = () => {
  return (
    <div className="App">
      <TodoForm saveTodo={console.warn} />
    </div>
  );
};

ReactDOM.render(<TodoForm />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
