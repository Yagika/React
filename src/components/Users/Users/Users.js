import React, {useEffect, useState} from 'react';

import User from "../User/User";

import './Users.css'

const Users = () => {
    const[users, setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])
    return (
        <div className={'wr'}>
        {users.map(value=><User key={value.id} id={value.id} name={value.name} email={value.email} username={value.username} website={value.website} phone={value.phone} street={value.address.street} city={value.address.city} company={value.company.name}/>)}
        </div>
    );
};

export default Users;
