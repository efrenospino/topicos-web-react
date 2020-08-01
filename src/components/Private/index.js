import React from "react";

const Private = (props) => {
    return <div>
        <h1>Private</h1>
        <p><button 
                onClick={() => {
                    props.setIsAuth(false);
                    localStorage.removeItem('jwt');
                }}
                type="button">Sign out</button></p>
    </div>;
};

export default Private;