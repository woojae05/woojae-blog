import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Root from "./Root";
import About from "./About";
import Router from "./myRouter/Router";
import Route from "./myRouter/Route";

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
