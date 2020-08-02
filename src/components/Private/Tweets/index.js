import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Tweet from './../Tweet';
import NewTweet from './../NewTweet';

const Tweets = () => {
    const [tweets, setTweets] = useState();

    const getTweets = () => {
        const host = process.env.REACT_APP_API_URL;
        const url = `${host}/tweets`;
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('jwt')
            }
        }).then(res => res.json())
        .then(json => {
            setTweets(json)
        });
    }

    const addTweet = (tweet) => {
        setTweets([tweet, ...tweets]);
    }
    
    useEffect(() => {
        getTweets()
    }, [])

    return <div>
        <ul>
            <li><Link to="/Profile/">Profile</Link></li>
        </ul>
        <NewTweet addTweet={addTweet} />
        {
            tweets && tweets.map(t => 
                <Tweet key={t._id} tweet={t}/> 
            )
        }
    </div>
}

export default Tweets;