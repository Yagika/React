import {useState,useEffect} from "react";

import Post from "../Post/Post";
import './Posts.css';
import {service} from "../../../services/Service";

const Posts = ({post}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts(post)
            .then(value => setPosts(value))
    }, [post])
    return (
        <div className={'wrapper'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;