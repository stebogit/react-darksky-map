import React from "react";
import { render } from "react-dom";
import MySuperCoolComponent from "../../dist";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <MySuperCoolComponent color="brown">Wow what a button</MySuperCoolComponent>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
