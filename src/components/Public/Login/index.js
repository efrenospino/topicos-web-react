import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => {
        const user = {username, password};
        const host = process.env.REACT_APP_API_URL;
        const url = `${host}/users/login`;
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(json => {
            props.setIsAuth(true);
            localStorage.setItem('jwt', json.token);
            history.push("/");
        })
        .catch(_ => alert('Error trying to authenticate.'));
    };
    return (
        <div>
            <h1>Login</h1>
            <form>
                <p><label>Username</label><br/>
                    <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={(e) => {setUsername(e.target.value)}}/></p>
                <p><label>Password</label><br/>
                    <input 
                        type="password" 
                        name="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}/></p>
                <p>
                    <button 
                        onClick={handleClick}
                        type="button">Sign in</button></p>
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/PasswordRecovery">Password Recovery</Link></li>
                <li><Link to="/SignUp">Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default Login;