// @ts-nocheck
import React from "react";
import JSONPretty from "react-json-pretty";
const circularAttributes = ["page", "reactComponentToBeRendered"];
export default function PagePrintComponent({
  context,
  next,
}: {
  context: any;
  next: any;
}) {
  const allKeys = Object.keys(context);
  const filteredKeys = allKeys.filter((k) => !circularAttributes.includes(k));
  const object = filteredKeys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: context[key],
    };
  }, {});
  return (
    <div>
      <h3>Page.js object attributes</h3>
      <JSONPretty id="json-pretty" data={{ Page: object }}></JSONPretty>
    </div>
  );
}
