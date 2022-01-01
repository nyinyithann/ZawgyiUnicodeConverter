// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_List from "rescript/lib/es6/belt_List.js";
import * as Js_option from "rescript/lib/es6/js_option.js";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.js";

function NavLink(Props) {
  var to = Props.to;
  var children = Props.children;
  var className = Props.className;
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var path;
  if (match) {
    var path$1 = Belt_List.reduce(url.path, "", (function (acc, p) {
            return acc + "/" + p;
          }));
    path = path$1.replace(/\/$/g, "");
  } else {
    path = "/";
  }
  var className$1 = Js_option.getWithDefault("", className);
  var className$2 = path === to ? "" + className$1 + " text-primary_50 bg-primary_600 dark:bg-slate-500" : className$1;
  return React.createElement("button", {
              className: className$2,
              type: "button",
              onClick: (function (e) {
                  e.preventDefault();
                  return RescriptReactRouter.push(to);
                })
            }, children);
}

var make = NavLink;

export {
  make ,
  
}
/* react Not a pure module */
