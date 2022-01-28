import {useState} from "react";

import './App.css';
import Users from "./components/Users/Users/Users";
import Details from "./components/Users/Details/Details";
import Posts from "./components/Posts/Posts/Posts";

function App() {
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setPost(null)
    }
    const getUserId = (id) => {
     setPost(id)
    }

    return (
        <div className='wrap'>
            <div className={'inner'}>
                <Users getUser={getUser}/>
            </div>
            <div className={'inner'}>
                {user && <Details user={user} getUserId={getUserId}/>}
            </div>
            <div className={'next'}>
                {post && <Posts post={post}/>}
            </div>
        </div>
    );
}

export default App;
