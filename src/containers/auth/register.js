import React from 'react';

//to dispatch the action from VIEW
import {connect} from 'react-redux';
import Actions from "../../actions";
import { Link } from 'react-router-dom';
import { getRegisterData } from '../../actions/auth/register';

// using strap react
// import { Button } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            statusTitle:"",
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
                    statusTitle: "Success",
                    statusMessage: "Thank You, you will be redirected to Login Page",
                    buttonText: "Nice",
                });
                
                // alert("Success");
                //redirect to login page if success
                this.props.history.push("/login");
                

            } else if(getRegisterData.error !== null){
                // alert("Failed");

                 //update state popBox state if fail
                 this.setState({
                    showPop:true,
                    statusTitle: "Failed",
                    statusMessage: "Make sure to fill up all the form properly dammit!",
                    buttonText: "OK",
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
        
        if(name != null && email!= null && password!= null && password_confirmation!= null){
            
            const data = {
                // name:name,
                name,
                email,
                password,
                password_confirmation,
            };
            //pass data to sagas/auth/register.js
            this.props.onRegister(data);

        } else {
            this.setState({
                showPop:true,
                statusTitle: "Failed",
                statusMessage: "Make sure to fill up all the form properly dammit!",
                buttonText: "OK",
            })
        }
    }


    render(){
        return(
            <div className="container">

                {/* {
                    // this is JS
                    // only show based on state of showPop, if true, show
                    this.state.showPop && (
                        // && () means return
                        // custom alert box
                        <div className = "popBox">
                            <h1>{this.state.statusMessage}</h1>

                            {/* to hide back the popBox */}
                            {/* <button onClick = {() => this.popButtonPressed()} >{this.state.buttonText}</button>
                        </div>
                    ) */}
                {/* } */}

                <Modal isOpen={this.state.showPop}>
                    <ModalHeader>{this.state.statusTitle}</ModalHeader>
                    <ModalBody>{this.state.statusMessage}</ModalBody>
                    <ModalFooter><Button onClick = {() => this.popButtonPressed()}>{this.state.buttonText}</Button>
                    </ModalFooter>
                </Modal>


                <h1>Register Here</h1>

                <div className = "card">
                    {/* //input form */}


                    <FormGroup>
                        <Label for="exampleText">Name</Label>
                        <Input type="text"
                        name="text"
                        id="exampleText"
                        title="Name must be more than 4 chars"
                        pattern=".{4,}" 
                        placeholder="Username" onChange={(name)=> this.setState({name:name.target.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input 
                        type="email" 
                        name="email" 
                        id="exampleEmail" 
                        title="Email in user@domain.com format" 
                        placeholder="something@domain.com" 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                        onChange={(email)=> this.setState({email:email.target.value})}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input 
                        type="password" 
                        name="password" 
                        id="examplePassword" 
                        placeholder="Password"
                        title="Password must be more than 6 chars"
                        pattern=".{6,}" 
                        placeholder="Password" 
                        onChange={(password)=> this.setState({password:password.target.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input 
                        type="password" 
                        name="password" 
                        id="examplePassword"
                        placeholder="Password Confirmation"
                        title="Password must be same as above"
                        pattern=".{6,}" 
                        placeholder="Confirm Password" 
                        onChange={(password_confirmation)=> this.setState({password_confirmation:password_confirmation.target.value})}
                        />
                    </FormGroup>

                    {/* <label>Name:</label>
                    <br/>
                    <input type="text"
                    title="Name must be more than 4 chars"
                    pattern=".{4,}" 
                    placeholder="Username" onChange={(name)=> this.setState({
                        name:name.target.value
                    })}
                    />

                    <label>Email:</label>
                    <br/>
                    <input type="text" 
                    title="Email in user@domain.com format" 
                    placeholder="something@domain.com" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                    onChange={(email)=> this.setState({
                        email:email.target.value
                    })}
                    /> */}
        
                    {/* <label>Password:</label>
                    <br/>
                    <input type="text" 
                    title="Password must be more than 6 chars"
                    pattern=".{6,}" 
                    placeholder="Password" 
                    onChange={(password)=> this.setState({
                        password:password.target.value
                    })}
                    /> */}
                    {/* <label>Retype Password:</label>
                    <br/>
                    <input type="password" 
                    title="Password must be same as above"
                    pattern=".{6,}" 
                    placeholder="Confirm Password" 
                    onChange={(password_confirmation)=> this.setState({
                        password_confirmation:password_confirmation.target.value
                    })}
                    /> */}
        
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