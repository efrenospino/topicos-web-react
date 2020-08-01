import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to="/SignIn">Sign In</Link></li>
                <li><Link to="/SignUp">Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default Home;