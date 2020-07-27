import React from 'react';

//to dispatch the action from VIEW
import {connect} from 'react-redux';
import Actions from "../../actions";
import { Link } from 'react-router-dom';
import { getRegisterData } from '../../actions/auth/register';

class Register extends React.Component{
    constructor(props){
        super(props);
        //same as register form needed
        this.state= {
            name:"",
            email:"",
            password:"",
            password_confirmation:"",

            //state for popBox
            showPop: false,
            statusMessage:"",
            buttonText:"",

        };
    }

    //component life cycle, detect page is load
    //theres others for example detect page close
    componentDidMount(){
        console.log("REGISTER PAGE IS CALLED")
    }

    // componentWillUnmount(){
    // }


    componentDidUpdate(prevProps){
        //maximum call
        //called when page is updated/ refresh
        //if the prevProps of register data is different with the current register data, that means the register producer is updated

        const { getRegisterData } = this.props;
        
        //from reducers compare previous and current
        if(prevProps.getRegisterData.isLoading && !getRegisterData.isLoading) {
            //object
            console.log(getRegisterData);

            if(getRegisterData.data.status === "success") {
                
                //update state popBox state if success
                this.setState({
                    showPop:true,
                    statusMessage: "Success",
                    buttonText: "Go Login",
                });
                
                // alert("Success");
                //redirect to login page if success
                this.props.history.push("/login");
                

            } else if(getRegisterData.error !== null){
                // alert("Failed");

                 //update state popBox state if fail
                 this.setState({
                    showPop:true,
                    statusMessage: "Failed",
                    buttonText: "Try Again",
                });
                

            }
        }
    }

    popButtonPressed(){
        const {statusMessage} = this.state;

        if(statusMessage === "success"){
            //using router dom to get history
            this.props.history.push("/login");

        } else {

            this.setState({
                showPop:false,
                // email:'',
                // password:''
            })
            //refresh the whole page, or you can reset value using setState
            this.props.history.push("/register");
        }
    }


    onSubmitPressed() {
        //destructuring, you can arrange random, make sure the same keyname
        const {name, email, password, password_confirmation} = this.state;

        const data = {
            // name:name,
            name,
            email,
            password,
            password_confirmation,
        };
        //pass data to sagas/auth/register.js
        this.props.onRegister(data);
    }


    render(){
        return(
            <div className="container">

                {
                    // this is JS
                    // only show based on state of showPop, if true, show
                    this.state.showPop && (
                        // && () means return
                        // custom alert box
                        <div className = "popBox">
                            <h1>{this.state.statusMessage}</h1>

                            {/* to hide back the popBox */}
                            <button onClick = {() => this.popButtonPressed()} >{this.state.buttonText}</button>
                        </div>
                    )
                }


                <h1>Register Here</h1>

                <div className = "card">
                    {/* //input form */}

                    <label>Name:</label>
                    <br/>
                    <input type="text" placeholder="name" title="Name must be more than 2 chars" placeholder="Username" onChange={(name)=> this.setState({
                        name:name.target.value
                    })}
                    />

                    <label>Email:</label>
                    <br/>
                    <input type="text" placeholder="email" title="user@domain.com" placeholder="something@domain.com" onChange={(email)=> this.setState({
                        email:email.target.value
                    })}
                    />
        
                    <label>Password:</label>
                    <br/>
                    <input type="text" placeholder="password" title="Password must be more than 6 chars" placeholder="Password" onChange={(password)=> this.setState({
                        password:password.target.value
                    })}
                    />
                    <label>Retype Password:</label>
                    <br/>
                    <input type="password" placeholder="password_confirmation" title="Password must be more than 6 chars" placeholder="Confirm Password" onChange={(password_confirmation)=> this.setState({
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
const mapStateToProp = (store) => ({
    //passing store to collect data from register actions
    getRegisterData : Actions.getRegisterData(store),

});

//dispatch action as props
const mapDispatchToProp = {
    onRegister: Actions.register,
};

// export default Register;

export default connect(mapStateToProp, mapDispatchToProp)(Register);