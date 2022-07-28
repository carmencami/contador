//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";

//render your react application
const timeCounter = [0, 0, 0, 0, 0, 0];

setInterval(renderEverySecond, 1000);

function renderEverySecond() {
  ReactDOM.render(
    <Counter counterWithChanges={timeCounter} />,
    document.querySelector("#app")
  );
  increaseCounter();
}

function increaseCounter() {
    timeCounter[5]++;
 for(let i=timeCounter.length;i>=0;i--){
    if (timeCounter[i] ===10 ) {
        timeCounter[i] = 0;
        timeCounter[i-1]++;
      } 
 }
}


