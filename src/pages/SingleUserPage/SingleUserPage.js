import {Link, useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import './SingleUserPage.css';

const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [id]);

    return (
        <div>
            {user &&
                <div className={'user'}>
                    <h2>{id} {user.name}</h2>
                    <h3>Email:{user.email}</h3>
                    <h3>Phone:{user.phone}</h3>
                    <h3>UserName:{user.username}</h3>
                    <Link to={'posts'}>
                        <button>Posts</button>
                    </Link>
                    <Outlet/>
                </div>
            }
        </div>
    );
};

export {SingleUserPage};