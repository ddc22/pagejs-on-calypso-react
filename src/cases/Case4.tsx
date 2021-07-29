import React from "react";
import page from "page";
import PagePrintComponent from "../components/PagePrintComponent";
export default function Case4(props: { context: any; next: any }) {
  return (
    <>
      <h1>Case4 - Route With A Catch All Pattern </h1>
      <button onClick={() => page("/")}>Home</button>

      <PagePrintComponent {...props} />
    </>
  );
}
