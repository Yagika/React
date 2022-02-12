import {Link} from "react-router-dom";

const Album = ({album}) => {
    let {id, title} = album;
    return (
        <div>
            <Link to={`${id}/photos`}>
                <p>
                    {id}. {title}
                </p>
            </Link>
        </div>
    );
};

export default Album;