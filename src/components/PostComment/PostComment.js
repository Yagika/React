import './PostComment.css'

const PostComment = ({comment}) => {
    const {id, email, name, body, postId} = comment;
    return (
        <div className={'pcom'}>
            <h1>{id}. {name}</h1>
            <h2>PostId: {postId}</h2>
            <h2>Email: {email}</h2>
            <p>Body: {body}</p>
        </div>
    );
};

export {PostComment};