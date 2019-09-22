import React, {Component} from "react";
import {Router, Route} from "react-router-dom";
import {connect} from "react-redux";
import {alertActions} from '../../actions';
import {PrivateRoute} from '../PrivateRoute';
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import {history} from '../../helpers';
import RentCarsPage from "../RentCarsPage/RentCarsPage";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

import "./App.css";

class App extends Component {

    componentDidMount() {
        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }


    state = {
        navBarLinks: [
            {
                name: "Accueil",
                url: "/",
                customId: ""
            },
            {
                name: "Louer une voiture",
                url: "rent-cars",
                customId: ""
            },
            {
                name: "Mettre ma voiture en location",
                url: "#",
                customId: ""
            },
            {
                name: "Connexion",
                url: "login",
                customId: ""
            },
            {
                name: "Mon profil",
                url: "dashboard",
                customId: ""
            }
        ]
    };

    render() {
        console.log("tu connais ma guele", this.props)

        return (
            <Router history={history}>
                <div className="App">
                    <NavBar links={this.state.navBarLinks}/>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/rent-cars" component={RentCarsPage}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <Footer links={this.state.navBarLinks}/>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    const {alert} = state;
    return {alert};
};
const mapActionsToProps = {
    clearAlerts: alertActions.clear
};
export default connect(mapStateToProps, mapActionsToProps)(App);
