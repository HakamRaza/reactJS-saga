import React from 'react';


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
    }


    render(){
        return(
            <div>

                <h1>This is Register Page</h1>
    
                //input form
                <input type="text" placeholder="name" onChange={()=> this.setState({
                    name:name.target.value
                })}
                />
    
                <input type="text" placeholder="email" onChange={()=> this.setState({
                    email:email.target.value
                })}
                />
    
    
                <input type="text" placeholder="password" onChange={()=> this.setState({
                    password:password.target.value
                })}
                />
    
                <input type="text" placeholder="password_confirmation" onChange={()=> this.setState({
                    password_confirmation:password_confirmation.target.value
                })}
                />
    
                <button onPress={()=> this.onSubmitPressed()}>Submit</button>

            </div>
        );
    }
}


export default Register;