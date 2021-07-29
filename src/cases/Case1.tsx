// @ts-nocheck
import React from "react";
import page from "page";
import PagePrintComponent from "../components/PagePrintComponent";
export default function Case1(props: { context: any; next: any }) {
  return (
    <>
      <h1>Case1 - Simple Route</h1>
      <button onClick={() => page("/")}>Home</button>

      <PagePrintComponent {...props} />
    </>
  );
}
