import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("myToken");

    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Logout</h1>
        <Link to="/login">Go to login</Link>
        <br />
        <Link to="/">Go to home page</Link>
      </div>
    );
  }
}

export default Logout;
