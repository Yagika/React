import './User.css';
const User = ({user}) => {
    let {id,name,username,email}=user
    return (
        <div className={'item'}>
            {id}) {name}--{username}--{email}
        </div>
    );
};

export default User;