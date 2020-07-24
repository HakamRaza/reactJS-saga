import React from 'react';

//to dispatch the action from VIEW
import {connect} from 'react-redux';
import Actions from "../../actions";
import { Link } from 'react-router-dom';

class Register extends React.Component{
    constructor(props){
        super(props);
        //same as register form needed
        this.state= {
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
        };
    }

    onSubmitPressed() {
        const {name, email, password, password_confirmation} = this.state;

        const data = {
            // name:name,
            name,
            email,
            password,
            password_confirmation,
        };

        this.props.onRegister(data);
    }


    render(){
        return(
            <div className="container">
                <h1>Register Here</h1>

                <div className = "card">
                    {/* //input form */}

                    <label>Name:</label>
                    <br/>
                    <input type="text" placeholder="name" onChange={(name)=> this.setState({
                        name:name.target.value
                    })}
                    />

                    <label>Email:</label>
                    <br/>
                    <input type="text" placeholder="email" onChange={(email)=> this.setState({
                        email:email.target.value
                    })}
                    />
        
                    <label>Password:</label>
                    <br/>
                    <input type="text" placeholder="password" onChange={(password)=> this.setState({
                        password:password.target.value
                    })}
                    />
                    <label>Retype Password:</label>
                    <br/>
                    <input type="text" placeholder="password_confirmation" onChange={(password_confirmation)=> this.setState({
                        password_confirmation:password_confirmation.target.value
                    })}
                    />
        
                    <button onClick={()=> this.onSubmitPressed()}>Register</button>

                    <Link to={"/login"}><p>Login</p></Link>
                </div>
            </div>
        );
    }
}

//get the data from api
const mapStateToPtop = (store) => ({});

//dispatch action as props
const mapDispatchToProp = {
    onRegister: Actions.register,
};

// export default Register;

export default connect(mapStateToPtop, mapDispatchToProp)(Register);