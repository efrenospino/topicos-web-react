import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <p><label>Username</label><br/><input type="text" name="username"></input></p>
                <p><label>Password</label><br/><input type="password" name="password"></input></p>
                <p><button type="button">Login</button></p>
            </form>
        </div>
    )
}

export default Login;