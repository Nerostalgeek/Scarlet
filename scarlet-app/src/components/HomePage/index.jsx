import React from "react";
import API from "../../utils/API.js";
import 'antd/dist/antd.css';
import Button from 'antd/es/button';
import "./HomePage.css";

import { Link } from "react-router-dom";

const HomePage = () => {
    return ( 
        <div className="l-homepage">
            <Link to="/login">
                <Button className="homepage-button" type="primary">Se connecter</Button>   
            </Link>     
        </div>
     );
}
 
export default HomePage;