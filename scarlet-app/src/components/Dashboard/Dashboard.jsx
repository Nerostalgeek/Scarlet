import React, {Component} from "react";
import "./Dashboard.css";
import {connect} from "react-redux";
import {userActions} from "../../actions";


import DashboardCard from "./DashboardCard/DashboardCard";

import userAvatar from "../../img/assets/dashboard/user-avatar.png";

class Dashboard extends Component {


    state = {};

    componentDidMount() {
        this.props.onGetUser(this.props.getUser.id)
        console.log("cucu props", this.props)

    }

    render() {
        return (
            <div className="l-dashboard">
                <div className="dashboard-header">
                    <div className="dashboard-avatar">
                        <img src={userAvatar} alt=""/>
                    </div>
                </div>
                <div className="dashboards-all-cards">
                    <DashboardCard title="Voir mes voitures" number="2" link="#"/>
                    <DashboardCard title="Consulter mes locations" number="5" link="#"/>
                    <DashboardCard title="Modifier mon profil" link="#"/>
                    <DashboardCard title="Mon Rang" link="#"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        getUser: state.authentication.user,
        user: state.users.items
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onGetUser: (id) => {
            dispatch(userActions.getUser(id))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
