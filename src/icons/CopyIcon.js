// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function CopyIcon(Props) {
  var className = Props.className;
  var fillColor = Props.fillColor;
  var tmp = {
    fill: fillColor,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  };
  if (className !== undefined) {
    tmp.className = Caml_option.valFromOption(className);
  }
  return React.createElement("svg", tmp, React.createElement("path", {
                  d: "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
                }), React.createElement("path", {
                  d: "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
                }));
}

var make = CopyIcon;

export {
  make ,
  
}
/* react Not a pure module */