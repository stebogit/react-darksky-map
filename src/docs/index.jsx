import React from "react";
import { render } from "react-dom";
import MySuperCoolComponent from "../../dist";
import "./styles.css";

function Demo() {
  return (
      <MySuperCoolComponent lat={47} lng={-119} zoom={11} />
  );
}

render(<Demo />, document.getElementById("app"));
