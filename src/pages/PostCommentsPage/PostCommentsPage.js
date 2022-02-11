import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import './PostCommentsPage.css';
import {PostComment} from "../../components/PostComment/PostComment";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getCommentsById(id).then(value => setComments([...value]))
    }, [id]);

    return (
        <div className={'pcoms'}>
            {comments.map(comment => <PostComment key={comment.id} comment={comment}/>)}
        </div>
    );
};
export {PostCommentsPage};