import React from 'react';

import './Post.css'


const Post = (props) => {
    const {name, year, img} = props
        return (
        <div className={'inner'}>
            <div className={'info'}>
                <h2>{name}</h2>
                <h3>{year}</h3>
            </div>
            <img src={img} alt={name}/>
        </div>
    );
};

export default Post;