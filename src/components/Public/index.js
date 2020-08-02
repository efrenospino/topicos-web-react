import React from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import PasswordRecovery from "./PasswordRecovery";
import { Switch, Route } from "react-router-dom";

const Public = (props) => {
    return <div>
        <h1>Publix</h1>
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/SignIn">
                <Login setIsAuth={props.setIsAuth}/>
            </Route>
            <Route exact path="/SignUp"><SignUp/></Route>
            <Route exact path="/PasswordRecovery"><PasswordRecovery/></Route>
        </Switch>
    </div>;
};

export default Public;