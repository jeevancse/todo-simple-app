import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Auth from "./component/auth/Auth";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./component/home/Homepage";

const token = localStorage.getItem("authToken");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {token ? (
        <Route exact path="/home" component={Homepage} />
      ) : (
        <Route exact path="/" component={Auth} />
      )}
        <Route exact path="/home" component={Homepage} />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
