import React, { useState } from 'react';

const NewTweet = (props) => {

    const [content, setContent] = useState("");

    const handleClick = () => {
        const host = process.env.REACT_APP_API_URL;
        const url = `${host}/tweets`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({"content": content}),
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('jwt')
            }
        }).then(res => res.json())
        .then(json => {
            props.addTweet(json);
            setContent('');
        })
        .catch(_ => alert('Error creating tweet'));
    };

    return (
        <>
            <form>
            <textarea 
                placeholder='What are you thinking on?'
                onChange={(e) => {setContent(e.target.value)}}
                value={content}/>
                <p><button 
                    onClick={handleClick}
                    type="button">New tweet</button></p>
            </form>
        </>
    );
}

export default NewTweet;