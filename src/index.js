import React from "react";
import ReactDOM from "react-dom";
import ConfigRoutes from './functions/routes';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
     <ConfigRoutes></ConfigRoutes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
