import React, {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => {
        const user = {username, password};
        const url = 'http://localhost:80/api/users/login';
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(json => alert(`User ${json.name} was authenticated.`))
        .catch(_ => alert('Error trying to authenticate.'));
    };
    return (
        <div>
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
                        type="button">Login</button></p>
            </form>
        </div>
    )
}

export default Login;