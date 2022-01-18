import React from 'react';

import './Comment.css'

const Comment = (props) => {
    const {name, email, body, id}=props
    return (
        <div className={'item'}>
            <h2>{id} {name}</h2>
            <h3>Email:{email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;