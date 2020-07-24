import React from 'react';

//to dispatch the action from VIEW
import {connect} from 'react-redux';
import Actions from "../../actions";


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

        this.props.onRegister();
    }


    render(){
        return(
            <div>

                <h1>This is Register Page</h1>
    
                //input form
                <input type="text" placeholder="name" onChange={(name)=> this.setState({
                    name:name.target.value
                })}
                />
    
                <input type="text" placeholder="email" onChange={(email)=> this.setState({
                    email:email.target.value
                })}
                />
    
    
                <input type="text" placeholder="password" onChange={(password)=> this.setState({
                    password:password.target.value
                })}
                />
    
                <input type="text" placeholder="password_confirmation" onChange={(password_confirmation)=> this.setState({
                    password_confirmation:password_confirmation.target.value
                })}
                />
    
                <button onClick={()=> this.onSubmitPressed()}>Submit</button>

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