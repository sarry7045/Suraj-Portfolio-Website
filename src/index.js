import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Portfolio2 from "./Portfolio2.0/Portfolio2.0.js";

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
    <Profiler id="Portfolio" onRender={onRender}>
      {/* <App /> */}
      <Portfolio2 />
    </Profiler>
  </React.StrictMode>
);
