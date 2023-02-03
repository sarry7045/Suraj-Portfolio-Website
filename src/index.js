import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div>
          <h4>Suraj Yadav...</h4>
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
