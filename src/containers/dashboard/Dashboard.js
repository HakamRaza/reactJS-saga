import React from 'react';
import { connect } from 'react-redux';
import Actions from 'actions';
import "./dashboard.css";
import Tasklist from "components/TaskList";

import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

    constructor(props){
        super(props);

        this.state= {

            popAddTask : false,
            //to output the data, initial value
            taskList: [],
            status:"Pending",
            // title: "",
            // description: "",
        }
    }

    componentDidMount(){
        console.log("Get All Executed")
        this.props.onGetAll();
    }


    componentDidUpdate(prevProps) {
        const { getAllData } = this.props;
        //check loading
        if(prevProps.getAllData.isLoading && !getAllData.isLoading){
            if(getAllData.data.status === 'success'){

                // console.log("dashboard did update", getAllData);
                this.setState({taskList: getAllData.data.all});
            }
        }
    }


    popAddTask(){
        this.setState({
            popAddTask: !this.state.popAddTask,
        })
    }

    _onSubmitButtonPressed(){
        //pass to saga
        const {title, description, status } = this.state;

        const data = {
            title,
            description,
            status,
        }

        this.props.onAddNew(data);
        // console.log(data);
    }

    render(){
        // console.log("DATA",this.state);
        return(
            // <div style={{textAlign: "center"}}>
            <div>
                <h1>This is Dashboard</h1>

                <button className="dash-add" onClick = {()=> this.popAddTask()}>Add Task</button>
                
                    
                {this.state.popAddTask && (
                    <div className = "dash-card">
                        {/* need to use same name For and id for react */}
                        <div>
                            <label htmlFor="title">Title :</label>
                            <input type = "text" placeholder ="Task Title" id="title" onChange={(title)=> this.setState({title: title.target.value})}></input>
                            
                            <label htmlFor="description">Description :</label>
                            <input type = "text" placeholder ="Description of Task" id="description" onChange = {(description) => this.setState({description: description.target.value})}></input>

                            <label htmlFor="status">Status :</label>
                            <div>
                                <select className ="option" name="status" id="status" onChange = {(status)=> this.setState({status:status.target.value})}>
                                    <option value="Pending" >Pending</option>
                                    <option value="On-Going">On-Going</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                        </div>
                        <button className="add-submit" onClick={()=>this._onSubmitButtonPressed()} >Submit</button>
                    </div>
                )}               
                
                <div className = "tl-container">

                    {/* {this.state.taskList.map((list) => (
                        <div>
                            <h4>{list.list_title}</h4>
                            <p>{list.list_desc}</p>
                            <p>Status: {list.list_status}</p>
                        </div>
                    ))} */}


                    {/* create component <taskList / title = {list.list_title} desc = {list.list_desc}> */}
                    
                    {this.state.taskList.map((list) => (
                        <Link 
                        to = {{
                            // key = {list.list.id}
                            pathname: `/dashboard/${list.id}`,
                            taskProps: list,
                        }}
                        >
                        
                            <Tasklist 

                            title = {list.list_title}
                            desc = {list.list_desc}
                            status = {list.list_status}
                            />
                        </Link>
                    ))}
                    
                </div>
            </div>
        );
    }
}

//get api data
const mapStateToProps = (store) => ({
    //from action/todo/getAll.js/export const getGetAllData
    getAllData : Actions.getAllData(store),
});

//call api
const mapDispatchToProps = {
    onGetAll: Actions.getAll,
    // link to above onAddNew
    onAddNew: Actions.addNew,
};

//connect the actions with api
//pass objects above
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);