import React from 'react';
import { Connect, connect } from 'react-redux';

import Actions from 'actions';

class Dashboard extends React.Component {

    componentDidMount(){
        this.props.onGetAll();
    }

    render(){
        return(
            <h1>This is Dashboard</h1>
        );
    }
}

const mapStateToProps = (store) => ({});
const mapDispatchToProps = {
    onGetAll: Actions.getAll,

};

//connect the actions with api
//pass objects above
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);