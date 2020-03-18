import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Post from "./Post";
// import Post1 from "./Post1";
// import Post2 from "./Post2";
// import Post3 from "./Post3";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/post" component={Post} />
      {/* <Route path="/post1" component={Post1} />
      <Route path="/post2" component={Post2} />
      <Route path="/post3" component={Post3} /> */}
    </div>
  </Router>
);
ReactDOM.render(routing, rootElement);
