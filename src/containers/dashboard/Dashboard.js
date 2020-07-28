import React from 'react';
import { connect } from 'react-redux';
import Actions from 'actions';
import "./dashboard.css";

class Dashboard extends React.Component {

    constructor(props){
        super(props);

        this.state= {

            popAddTask : false,
            //to output the data, initial value
            taskList: [],
        }
    }

    componentDidMount(){
        this.props.onGetAll();
    }


    componentDidUpdate(prevProps) {
        const { getAllData } = this.props;
        //check loading
        if(prevProps.getAllData.isLoading && !getAllData.isLoading){
            if(getAllData.data.status === 'success'){
                
                console.log("dashboard did update", getAllData);
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
    }

    render(){
        return(
            <div className="container">
                <h1>This is Dashboard</h1>
                <button onClick = {()=> this.popAddTask()}>Add Task</button>

                {
                    this.state.popAddTask && (

                        <div className = "card">

                            {/* need to use same name For and id for react */}
                            <label htmlFor="title">Title</label>
                            <input type = "text" 
                            placeholder ="Task Title" 
                            id="title"
                            onChange={(title)=> this.setState({
                                title: title.target.value
                            })}
                            ></input>


                            <label htmlFor="description">Description</label>
                            <input type = "textbox"
                            placeholder ="Description of Task" 
                            id="description"
                            onChange = {(description)=> this.setState({
                                description: description.target.value,
                            })}
                            ></input>

                            <label htmlFor="status">Status</label>
                            <input type = "text"
                            placeholder ="Set Status"
                            id="status"
                            onChange = {(status)=> this.setState({
                                status:status.target.value,
                            })}
                            ></input>

                            <button onClick={()=>this._onSubmitButtonPressed()} >Submit</button>
                        </div>

                    )
                }

                {this.state.taskList.map((list) => (
                    <div>
                        <h4>{list.list_title}</h4>
                        <p>{list.list_desc}</p>
                        <p>Status: {list.list_status}</p>
                    </div>
                    // create component <taskList / title = {list.list_title} desc = {list.list_desc}>
                ))}
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