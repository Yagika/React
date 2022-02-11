import {Link} from "react-router-dom";

const Post = ({post}) => {
    let {id,title} = post;
    return (
        <div>
            <Link to={id.toString()} state={post}>{id}. {title}</Link>
        </div>
    );
};

export default Post;