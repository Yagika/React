import './Details.css';

const Details = ({user,getUserId}) => {
    const {id,name,email,phone,username,website,address,company}=user;
    return (
        <div className={'item'}>
            <h2>{id} {name}</h2>
            <h3> Email:{email}</h3>
            <h3>Phone:{phone}</h3>
            <h3>UserName:{username}</h3>
            <p>Website:{website}</p>
            <p>Adress:
                City:{address.city},
                Street:{address.street},
                Suite:{address.suite},
                Zipcode:{address.zipcode},
                Geo: lat:{address.geo.lat},
                lng:{address.geo.lng}
            </p>
            <p>Company:
                Name:{company.name},
                CatchPhrase:{company.catchPhrase},
                BS:{company.bs}
            </p>
            <div>
                <button onClick={() => getUserId(id)}>getPosts</button>
            </div>
        </div>
    );
};

export default Details;