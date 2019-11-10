import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    // whenever you re creating a form initialize
    // the objects with empty string or a value coming from a server
    data: { username: "", password: "" },
    errors: {}
  };

  //   username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    //const username = this.username.current.value;
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
