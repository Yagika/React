import './Post.css';

const Post = ({post}) => {
    const {id,title,body,userId}=post;
    return (
        <div className={'unit'}>
            <h2>Id:{id} UserId:{userId}</h2>
            <div>Title:{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;