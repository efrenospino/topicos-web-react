import React from "react";
import Login from "./Login";

const Public = (props) => {
    return <div>
        <h1>Login</h1>
        <Login setIsAuth={props.setIsAuth}/>
    </div>;
};

export default Public;