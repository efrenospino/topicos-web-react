import React, {useState, useEffect} from 'react';

const Tweets = () => {
    const [tweets, setTweets] = useState();
    const getTweets = () => {
        const host = process.env.REACT_APP_API_URL;
        const url = `${host}/tweets`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setTweets(json)
            });
    }
    useEffect(() => {
        getTweets()
    }, [])
    return <div>
        {
            tweets ? 
                tweets.map(t => 
                    <div key={t._id}>
                        <br/>
                        <p>{t.content}</p>
                        <p>@{t.user.username}</p>
                        <p>Comments: {t.comments.length}</p>
                        <p>{t.createdAt}</p>
                </div>)
                : 
                <p>There's nothing to show</p>
        }
    </div>
}

export default Tweets;