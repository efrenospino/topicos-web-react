import React from "react";
import Tweets from "./Tweets";
import Profile from "./Profile";
import { Switch, Route, useHistory } from "react-router-dom"

const Private = (props) => {
    const history = useHistory();
    return <div>
        <h1>Private</h1>
        <p><button 
                onClick={() => {
                    props.setIsAuth(false);
                    localStorage.removeItem('jwt');
                    history.push("/");
                }}
                type="button">Sign out</button></p>
        <Switch>
            <Route exact path="/Profile"><Profile/></Route>
            <Route exact path="/Tweets"><Tweets/></Route>
        </Switch>
    </div>;
};

export default Private;