import React, { Component } from "react";

import { connect } from "react-redux";
import Actions from "../../actions";
import "./public.css";
import {Link} from 'react-router-dom';
import { getRegisterData } from "../../actions/auth/register";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
      passwordInput: ""
    };

    this.onSubmitPressed = this.onSubmitPressed.bind(this);
  }

  //2. check whether there update (auto)
  componentDidUpdate(prevProps){
    
    const { getLoginData } = this.props;
    
    //3. check action status
      //true                                //false
    if(prevProps.getLoginData.isLoading && !getRegisterData.isLoading){
      
      //4. check status response is success
      if(getLoginData.data.status === "success") {
                
        // alert("Login Success");
        //redirect to dashboard page if success
        this.props.history.push("/dashboard");
        
        //5. if there no response success and error is not null
      } else if (getRegisterData.error !== null){
        
        alert("Failed Please Try Again");
        //redirect to login page
        this.props.history.push("/login");
      }
    }
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
            placeholder="Email"
            title = "Email in something@domain.com format"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
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
            placeholder="Password"
            pattern=".{6,}" 
            title="Six or more characters"
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


//1. get update data from saga, pass after called the api assign to getLoginData props 
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
