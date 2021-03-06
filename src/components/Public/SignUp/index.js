import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignUp = (props) => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleClick = async() => {
        
        if (password !== passwordConfirmation) {
            alert('Password do not match confirmation');
            return
        }

        const user = {name, username, age, email, password};
        const host = process.env.REACT_APP_API_URL;
        const url = `${host}/users`;

        try {
            const signUpResponse = await fetch(url, {
                method: 'POST', 
                body: JSON.stringify(user),
                headers: {'Content-Type': 'application/json'}
            });

            const signUpData = await signUpResponse.json();
            if (signUpData !== null) {
                const loginURL = `${host}/users/login`;
                const loginResponse = await fetch(loginURL, {
                    method: 'POST', 
                    body: JSON.stringify({username, password}),
                    headers: {'Content-Type': 'application/json'}
                });
            
                const loginData = await loginResponse.json();
                props.setIsAuth(true);
                localStorage.setItem('jwt', loginData.token);
                history.push("/");

                alert('User created succesfully.');
            }
            
        } catch (_) {
            alert('Error trying to authenticate.');
        }
    
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
                <p><label>Age</label><br/>
                    <input 
                        type="number" 
                        name="age" 
                        value={age} 
                        onChange={(e) => {setAge(e.target.value)}}/></p>
                <p><label>Email</label><br/>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => {setEmail(e.target.value)}}/></p>
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
                        value={passwordConfirmation} 
                        onChange={(e) => {setPasswordConfirmation(e.target.value)}}/></p>
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