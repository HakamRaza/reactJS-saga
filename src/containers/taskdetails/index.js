import React from 'react';
import "./taskdetails.css";

//for del button
import Actions from "../../actions"
import { connect } from 'react-redux';
import { getdelListData } from '../../actions/todo/delList';


class TaskDetail extends React.Component {9
    constructor(props){
        super(props)
        
        let location = this.props.location;
        console.log("this is location:", location);

        this.state = {
            task: this.props.location.taskProps,
        }
    }

    componentDidUpdate(prevProps){
        const { getdelListData } = this.props;

        if(prevProps.getdelListData.isLoading && !getdelListData.isLoading){
            if(getdelListData.data.status === "success"){
                //move back 1 step out
                this.props.history.push("./");
                alert("Delete Success");
            }
        }


    }

    _onDelPressed(id) {
        // we passing an integer, not a form data
        this.props.onDelList(id);
    }


    render(){
        return(

            <div>
                <div className="breadcrumbs">
                    <ul>
                        <li>Home</li>
                        <li>Dashboard</li>
                    </ul>
                </div>

                <div className="details-center">
                    <div className="details-card">
                        <p>{this.state.task.id}</p>
                        <p>{this.state.task.list_title}</p>
                        <p>{this.state.task.list_desc}</p>
                        <p>{this.state.task.list_status}</p>
                        <p>{this.state.task.created_at}</p>
                        <p>{this.state.task.updated_at}</p>
                        {/* <p>Test</p> */}
                        {/* <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p> */}
                    <button onClick={()=> this._onDelPressed(this.state.task.id)}>Delete</button>
                    </div>
                </div>
            </div>

        );
    }

}


// export default TaskDetail;

const mapStateToProps = (store) => ({
    getdelListData: getdelListData(store),
});

const mapDispatchToProps = {
    onDelList:Actions.delList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);