import "../App.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    const myToken = localStorage.getItem("myToken");
    let loggedIn = true;

    if (myToken == null) {
      loggedIn = false;
    }

    this.state = {
      username: "",
      password: "",
      loggedIn,
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "daopm" && password === "pass") {
      localStorage.setItem("myToken", "littleSecret");
      this.setState({
        loggedIn: true,
      });
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="App">
        <h1>Log in</h1>

        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="username"
            name="username"
            className="m-2"
            value={this.state.username}
            onChange={this.onChange}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="m-2"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />

          <input type="submit" value="Login" className="btn btn-dark" />
        </form>
      </div>
    );
  }
}

export default Login;
