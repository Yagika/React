const User = ({user,getUser}) => {
    const {id,name,email} = user;
    return (
        <div>
            <h3>
                {id}. {name} {email}
                <button onClick={() => getUser(user)}>Details</button>
            </h3>
        </div>
    );
};

export default User;