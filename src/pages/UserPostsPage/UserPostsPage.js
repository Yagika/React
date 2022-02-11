import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import {UserPost} from "../../components/UserPost/UserPost";
import './UserPostsPage.css'

const UserPostsPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getPostsById(id).then(value => setPosts([...value]))
    }, [id]);

    return (
        <div className={'uposts'}>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};
export {UserPostsPage};