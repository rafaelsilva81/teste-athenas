import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
