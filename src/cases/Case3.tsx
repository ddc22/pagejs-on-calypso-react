import React from "react";
import page from "page";
import PagePrintComponent from "../components/PagePrintComponent";
export default function Case3(props: { context: any; next: any }) {
  return (
    <>
      <h1>Case3 - Route With Optional Param </h1>
      <button onClick={() => page("/")}>Home</button>

      <PagePrintComponent {...props} />
    </>
  );
}
