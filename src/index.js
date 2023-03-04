import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
}

root.render(
  <React.StrictMode>
    {/* <Suspense
      fallback={
        <div>
          <h4>Suraj Yadav...</h4>
        </div>
      }
    > */}
    <Profiler id="Portfolio" onRender={onRender}>
      <App />
    </Profiler>
    {/* </Suspense> */}
  </React.StrictMode>
);
