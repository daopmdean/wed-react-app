import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Admin extends Component {
  constructor(props) {
    super(props);
    const myToken = localStorage.getItem("myToken");
    let loggedIn = true;

    if (myToken == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    };
  }

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h1>Admin page</h1>
        <Link to="/logout">logout</Link>
      </div>
    );
  }
}

export default Admin;
