import Case1 from "./cases/Case1";
import Case2 from "./cases/Case2";
import Case3 from "./cases/Case3";
import Case4 from "./cases/Case4";
import Home from "./cases/Home";

/**
 * Store the component to be drawn inside context object
 * */
const queueDrawCase4 = (context: any, next: any) => {
  console.log("queueDrawCase4");
  context.reactComponentToBeRendered = <Case4 context={context} next={next} />;
  next();
};

const queueDrawCase3 = (context: any, next: any) => {
  console.log("queueDrawCase3");
  context.reactComponentToBeRendered = <Case3 context={context} next={next} />;
  next();
};

const queueDrawCase2 = (context: any, next: any) => {
  console.log("queueDrawCase2");
  context.reactComponentToBeRendered = <Case2 context={context} next={next} />;
  next();
};

const queueDrawCase1 = (context: any, next: any) => {
  console.log("queueDrawCase1");
  context.reactComponentToBeRendered = <Case1 context={context} next={next} />;
  next();
};

const drawHome = (context: any, next: any) => {
  console.log("drawPage1");
  // "reactComponentToBeRendered" This is equivalent to the "primary" or "secondary" attribute set in wp-calypso route structure
  context.reactComponentToBeRendered = <Home context={context} next={next} />;
  next();
};

export {
  drawHome,
  queueDrawCase1,
  queueDrawCase2,
  queueDrawCase3,
  queueDrawCase4,
};
