import React, {Component} from "react";

import "./formLogin.css";

class FormLogin extends Component {
    render() {
        return (

            <div className="form">
                <div className="form-toggle"/>
                <div className="form-panel one">
                    <div className="form-header">
                        <h1>Account Login</h1>
                    </div>
                    <div className="form-content">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input id="username" name="username" required="required" type="text"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id="password" name="password" required="required" type="password"/>
                            </div>
                            <div className="form-group">
                                <label className="form-remember">
                                    <input type="checkbox"/>
                                    Remember Me
                                </label>
                                <a className="form-recovery" href="#">Forgot Password?</a>
                            </div>
                            <div className="form-group">
                                <button type="submit">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="form-panel two">
                    <div className="form-header">
                        <h1>Register Account</h1>
                    </div>
                    <div className="form-content">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input id="username" name="username" required="required" type="text"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id="password" name="password" required="required" type="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <input id="cpassword" name="cpassword" required="required" type="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input id="email" name="email" required="required" type="email"/>
                            </div>
                            <div className="form-group">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormLogin;
