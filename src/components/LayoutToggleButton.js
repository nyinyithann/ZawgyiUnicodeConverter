// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as DoubleIcon from "../icons/DoubleIcon.js";
import * as SingleIcon from "../icons/SingleIcon.js";

var actionBtnDefaultStyle = "action-btn dark:hover:text-slate_100 dark:hover:bg-slate-300 dark:active:bg-primary_50";

function LayoutToggleButton(Props) {
  var className = Props.className;
  var toggleState = Props.toggleState;
  var onClick = Props.onClick;
  var cn = className !== undefined ? "" + actionBtnDefaultStyle + " " + className : actionBtnDefaultStyle;
  return React.createElement("button", {
              className: cn,
              type: "button",
              onClick: onClick
            }, toggleState === /* Single */0 ? React.createElement(DoubleIcon.make, {
                    className: "h-full w-full",
                    fillColor: "var(--color-primary-600)"
                  }) : React.createElement(SingleIcon.make, {
                    className: "h-full w-full",
                    fillColor: "var(--color-primary-600)"
                  }));
}

var make = LayoutToggleButton;

export {
  actionBtnDefaultStyle ,
  make ,
  
}
/* react Not a pure module */
