import React, {useState} from "react";
import "./FormRegister.css";
import {useDispatch} from "react-redux";
import {modalActions, userActions} from "../../../actions";
import closeIcon from "../../../img/icons/close.png";

const FormRegister = () => {
    const dispatch = useDispatch();
    const [enteredFirstName, setFirstName] = useState("");
    const [enteredLastName, setLastName] = useState("");
    const [enteredEmail, setEmail] = useState("");
    const [enteredPassword, setPassword] = useState("");
    const [enteredConfirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState('');
    const [submitted, setSubmitted] = useState('false');


    const submitHandler = event => {
        event.preventDefault();
        const user = {
                lastName: enteredLastName,
                firstName: enteredFirstName,
                email: enteredEmail,
                password: enteredPassword,
                role: 'user'
        };

        const formChecker = {
            confirmPassword: enteredConfirmPassword,
            matchPassword: passwordMatch,
            isSubmitted: submitted
        };

        if (user.password === formChecker.confirmPassword) {
            setPasswordMatch(prev => prev + 'true');
            console.log(user, formChecker)
        }
        console.log(user, formChecker)

        if (
            user.firstName &&
            user.lastName &&
            user.email &&
            user.password &&
            formChecker.confirmPassword &&
            formChecker.matchPassword
        ) {
            console.log("par ici", user);

            dispatch(userActions.register(user));
        }
    };


    return (
        <div className="form">
            <div className="form-toggle"/>
            <div className="form-panel one">
                <div className="form-header">
                    <h1>Créer un compte</h1>
                </div>
                <div className="form-content">
                    <form onSubmit={(event) => {
                        setSubmitted(true);
                        submitHandler(event);
                    }}>
                        <div className="form-group">
                            <label htmlFor="firstName">Prénom</label>
                            <input
                                id="firstName"
                                name="firstName"
                                required="required"
                                type="text"
                                value={enteredFirstName}
                                onChange={event => setFirstName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Nom</label>
                            <input
                                id="lastName"
                                name="lastName"
                                required="required"
                                type="text"
                                value={enteredLastName}
                                onChange={event => setLastName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Adresse E-Mail</label>
                            <input
                                id="email"
                                name="email"
                                required="required"
                                type="email"
                                value={enteredEmail}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mot de passe</label>
                            <input
                                id="password"
                                name="password"
                                required="required"
                                type="password"
                                value={enteredPassword}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                        <div
                            className={
                                "form-group" +
                                (submitted && !enteredPassword ? " has-error" : "")
                            }
                        >
                            <label htmlFor="confirmPassword">
                                Confirmez le mot de passe
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                required="required"
                                type="password"
                                value={enteredConfirmPassword}
                                onChange={event => setConfirmPassword(event.target.value)}
                            />
                            {!passwordMatch && (
                                <div className="help-block">
                                    Les mots de passe ne sont pas identiques
                                </div>
                            )}
                        </div>
                        <button
                            className="form-close-button"
                            type="button"
                            onClick={() => dispatch(modalActions.hideModal())}
                        >
                            <img src={closeIcon} alt=""/>
                        </button>
                        <div className="form-group">
                            <button type="submit">S'enregistrer</button>
                            {/* {registering && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )} */}
                        </div>
                    </form>
                </div>
                <button
                    className="form-register-button"
                    type="button"
                    onClick={() => dispatch(modalActions.displayLoginForm())}
                >
                    Se connecter
                </button>
            </div>
        </div>
    );
};
export default FormRegister;
