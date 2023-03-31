import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tickets from "./components/Tickets";
import Future from "./components/Future";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Future />
    <Tickets />
  </React.StrictMode>
);

reportWebVitals();
