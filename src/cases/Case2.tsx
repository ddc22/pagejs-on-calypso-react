import React from "react";
import page from "page";
import PagePrintComponent from "../components/PagePrintComponent";
export default function Case2(props: { context: any; next: any }) {
  return (
    <>
      <h1>Case2 - Route With Param </h1>
      <button onClick={() => page("/")}>Home</button>

      <PagePrintComponent {...props} />
    </>
  );
}
