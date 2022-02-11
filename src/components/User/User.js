import {Link} from "react-router-dom";

const User = ({user}) => {
    let {id, name} = user;
    return (
        <div>
            <Link to={id.toString()} state={user}>
                <h2>
                    {id}. {name}
                </h2>
            </Link>
        </div>
    );
};

export default User;