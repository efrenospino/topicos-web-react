import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const PasswordRecovery = () => {
    const [username, setUsername] = useState('');
    const handleClick = () => {
        
    };
    return (
        <div>
            <h1>Password Recovery</h1>
            <form>
                <p><label>Username</label><br/>
                    <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={(e) => {setUsername(e.target.value)}}/></p>
                <p>
                    <button 
                        onClick={handleClick}
                        type="button">Recover Password</button></p>
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/SignIn">Sign In</Link></li>
            </ul>
        </div>
    )
}

export default PasswordRecovery;