import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import login from "./components/login";
import admin from "./components/admin";
import logout from "./components/logout";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={A} />
      <Route path="/login" component={login} />
      <Route path="/admin" component={admin} />
      <Route path="/logout" component={logout} />
    </Switch>
  );
}

const A = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/login" className="App-link">
          Go to login
        </Link>
      </header>
    </div>
  );
};

export default App;
