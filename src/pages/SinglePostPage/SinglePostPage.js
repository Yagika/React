import {Link, useLocation, useParams,Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import './SinglePostPage.css';
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id]);

    return (
        <div>
            {post &&
                <div className={'post'}>
                    <h1>{post.id}. {post.title}</h1>
                    <h2>userId: {post.userId}</h2>
                    <p>Body: {post.body}</p>
                    <Link to={'comments'}>
                        <button>Comments</button>
                    </Link>
                    <Outlet/>
                </div>
            }
        </div>
    );
};

export {SinglePostPage};