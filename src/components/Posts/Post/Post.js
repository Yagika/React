import React from 'react';

import './Post.css'

const Post = (props) => {
    const {title, body, id} = props
    return (
        <div className={'inner'}>
            <h1>ID:{id}</h1>
            <div>
                <h3>Title:{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Post;