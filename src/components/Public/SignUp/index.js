import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirmation, setPassConfirmation] = useState('');
    const handleClick = () => {
        
    };
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <p><label>Name</label><br/>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => {setName(e.target.value)}}/></p>
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
                <p><label>Password Confirmation</label><br/>
                    <input 
                        type="password" 
                        name="passwordConfirmation" 
                        value={passConfirmation} 
                        onChange={(e) => {setPassConfirmation(e.target.value)}}/></p>
                <p>
                    <button 
                        onClick={handleClick}
                        type="button">Sign up</button></p>
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/SignIn">Sign In</Link></li>
            </ul>
        </div>
    )
}

export default SignUp;