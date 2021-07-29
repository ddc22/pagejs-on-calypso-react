import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-json-pretty/themes/monikai.css";

import page from "page";
import {
  queueDrawCase1,
  queueDrawCase2,
  queueDrawCase3,
  drawHome,
  queueDrawCase4,
} from "./controller";

function Layout({ reactComponentToBeRendered }: any) {
  return <div className="container">{reactComponentToBeRendered}</div>;
}

/**
 * The root render call that renders the react component onto thedom
 * */
function render(context: any, next: any) {
  ReactDOM.render(
    <Layout
      reactComponentToBeRendered={context.reactComponentToBeRendered}
    ></Layout>,
    document.getElementById("root")
  );
  console.log({ context, next });
  next();
}

/**
 * Registering routes
 * */
page("/", drawHome, render);
page("/case1", queueDrawCase1, render);
page("/case2/:someParam", queueDrawCase2, render);
page("/case3/:someOptionalParam?", queueDrawCase3, render);
page("/case4/catch-all/*", queueDrawCase4, render);

/**
 * Initialize the routes
 * */
page();
