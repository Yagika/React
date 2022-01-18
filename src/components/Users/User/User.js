import React from 'react';

import './User.css'

const User = (props) => {
    const {name, email, phone, username, website, id,street, city,company}=props
    return (
        <div className={'user'}>
            <h1>{id} {name}</h1>
            <h1>Email:{email}</h1>
            <h1>Phone: {phone}</h1>
            <h2>Username: {username}</h2>
            <h3>Website: {website}</h3>
            <p>City: {city} Street: {street}</p>
            <p>Company name: {company}</p>
        </div>
    );
};

export default User;