import React from "react";
import "./styles.css";

import ReactDom from "react-dom";
import {
  Route,
  Link,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

export default class App extends React.Component {
  verify = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var credentials = ["newuser", "123"];
    const { history } = this.props;

    if (username === credentials[0] && password === credentials[1]) {
      history.push("/post");
    } else {
      alert("Wrong user and password");
    }
  };

  render() {
    return (
      <div className="App">
        <h1> Login</h1>
        <input id="username" placeholder="username" />
        <br />
        <input id="password" placeholder="password" />
        <br />
        <button onClick={this.verify}>SUBMIT</button>
      </div>
    );
  }
}
