import React from "react";
import page from "page";
import PagePrintComponent from "../components/PagePrintComponent";

export default function Home(props: any) {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h3>Programmatic Routing</h3>
        <div>
          <button onClick={() => page("/case1")}>Case 1</button>
        </div>
        <div>
          <button onClick={() => page("/case2/programmatic")}>Case 2</button>
        </div>
        <h3>Anchor Links</h3>
        <ul>
          <li>Case 1</li>
          <ul>
            <li>
              <a href="/case1">/case1</a>
            </li>
          </ul>
          <li>Case 2</li>
          <ul>
            <li>
              <a href="/case2">
                /case2 (Will be empty since param is not optional)
              </a>
            </li>
            <li>
              <a href="/case2/user">/case2/user</a>
            </li>
          </ul>
          <li>Case 3</li>
          <ul>
            <li>
              <a href="/case3">/case3</a>
            </li>
            <li>
              <a href="/case3/unicorn">/case3/unicorn</a>
            </li>
          </ul>
          <li>Case 4</li>
          <ul>
            <li>
              <a href="/case4/catch-all">/case4/catch-all</a>
            </li>
            <li>
              <a href="/case4/catch-all/every/subroute">
                /case4/catch-all/every
              </a>
            </li>
            <li>
              <a href="/case4/catch-all/subroute/will">
                /case4/catch-all/subroute/will
              </a>
            </li>
            <li>
              <a href="/case4/catch-all/be/caught/by/this/pattern">
                /case4/catch-all/be/caught/by/this/pattern
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <PagePrintComponent {...props} />
    </div>
  );
}
