import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import './PostsPage.css';
import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            <div className={'posts'}>
                <div className={'item'}>
                    {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
                <div className={'item'}>
                    <div><Outlet/></div>
                </div>
            </div>
        </div>
    );
};

export {PostsPage};