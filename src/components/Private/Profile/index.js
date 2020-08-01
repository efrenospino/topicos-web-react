import React from 'react';
import {Link, useParams} from 'react-router-dom';

const Profile = () => {
    const params = useParams();
    return (
        <>
            <h2>Tweets @{params.username}</h2>
            <p><Link to="/">Return to home</Link></p>
        </>
    );
}

export default Profile;