import {useState, useEffect} from "react";

import User from "../User/User";
import {service} from "../../../services/Service";
import './Users.css';

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        service.getAllUsers()
            .then(value => setUsers(value))
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;