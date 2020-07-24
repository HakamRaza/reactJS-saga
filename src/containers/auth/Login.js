import React, { Component } from "react";

import { connect } from "react-redux";
import Actions from "../../actions";
import "./public.css";
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
      passwordInput: ""
    };

    this.onSubmitPressed = this.onSubmitPressed.bind(this);
  }

  onSubmitPressed() {
    //object
    // const data = {
    //   //get from input above
    //   email: this.state.emailInput,
    //   password: this.state.passwordInput
    // };


    // destructuring above
    const {emailInput, passwordInput} = this.state;
    const data = {
      email: emailInput,
      password: passwordInput,
    };

    this.props.onLogin(data);
  }

  render() {
    console.log("DATA", this.props.getLoginData);
    return (
      <div className = "container">
          <h1>Log In Here</h1>
          <br/>

        <div className = "card">

          <label>Email:</label>
          <br/>
          <input
            type="text"
            placeholder="email"
            trigger function every time it change
            onChange={email => {
              //update at state
              this.setState({ emailInput: email.target.value });
            }}

            // check what is type
            // onChange={(email) => {
            //   console.log(email.target.value);
            // }}

          />
          <br/>
          <label>Password:</label>
          <br/>
          <input
            type="text"
            placeholder="password"
            onChange={password => {
              this.setState({ passwordInput: password.target.value });
            }}
          /><br/>

          {/* <button onClick={this.onSubmitPressed}>Login</button> */}
          {/* same as */}

          <button onClick={() => this.onSubmitPressed()}>Login</button>

          <Link to={"/register"}><p>Register Here</p></Link>

        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  getLoginData: Actions.getLoginData(store)
});


const mapDispatchToProps = {
  onLogin: Actions.login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
