import React from 'react';
import "./tasklist.css";

class Tasklist extends React.Component {
    constructor(props){
        super(props);

        this.state={
            color:"grey",
            statuscol:"grey"
        }
    }

    componentDidMount(){
        switch (this.props.status) {
            
            case "Pending":
                this.setState({
                    color:"goldenrod",
                    statuscol:"gold",
                })
            break;

            case "On-Going":
                this.setState({
                    color:"lightgreen",
                    statuscol:"green"
                })
            break;
        
            case "Completed":
                this.setState({
                    color:"lightblue",
                    statuscol:"blue"
                })
            break;
        
            default:
                this.setState({
                    color:"grey",
                    statuscol:"grey"
                })
                break;
        }

    }

    
    render(){
        console.log(this.props);

        return(
            <div className="tl-card" style={{boxShadow:`10px 10px ${this.state.color}`}}>
                <h4>{this.props.title}</h4>
                <p>{this.props.desc}</p>

                <div className="status-pos">
                    <p style={{color:this.state.statuscol}}><b>{this.props.status}</b></p>
                </div>

                <div className="button">
                    <button >Edit</button>
                    <button className="tl-button">Delete</button>
                </div>
            </div>
        );
    }


}

export default Tasklist;