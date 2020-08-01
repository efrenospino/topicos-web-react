import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Tweets = () => {
    const [tweets, setTweets] = useState();

    const getTweets = () => {
        const host = process.env.REACT_APP_API_URL;
        const url = `${host}/tweets`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setTweets(json)
            });
    }

    const [newTweet, setTweet] = useState('');
    const handleClick = () => {
        const host = process.env.REACT_APP_API_URL;
        const url = `${host}/tweets`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({"content": newTweet}),
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('jwt')
            }
        })
        .then(_ => {
            setTweet('')
            getTweets();
        })
        .catch(_ => alert('Error creating tweet'));
    };
    
    useEffect(() => {
        getTweets()
    }, [])

    return <div>
        <ul>
            <li><Link to="/Profile">Profile</Link></li>
        </ul>
        <form>
            <textarea 
                placeholder='What are you thinking on?'
                onChange={(e) => {setTweet(e.target.value)}}
                value={newTweet}/>
            <p><button 
                onClick={handleClick}
                type="button">New tweet</button></p>
        </form>
        {
            tweets && tweets.map(t => 
                <div key={t._id}>
                        <p>{t.content}</p>
                        <p>@{t.user.username}</p>
                        <p>Comments: {t.comments.length}</p>
                        <p>{t.createdAt}</p>
                        <hr/>
                </div>)
        }
    </div>
}

export default Tweets;