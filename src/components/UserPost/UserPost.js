import './UserPost.css'

const UserPost = ({post}) => {
    const {id, title, body, userId} = post;
    return (
        <div className={'upost'}>
            <h1>{id}. {title}</h1>
            <h2>userId: {userId}</h2>
            <p>Body: {body}</p>
        </div>
    );
};

export {UserPost};