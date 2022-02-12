import {useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import Album from "../../components/Album/Album";
import {userService} from "../../services/user.service";
import './UserAlbums.css';

const UserAlbums = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getAlbumsById(id).then(value => setAlbums([...value]))
    }, [id]);

    return (
        <div className={'albums'}>
            {albums &&
                <div>
                    <h1>{id}. Albums</h1>
                    {albums.map(album => <Album key={album.id} album={album}/>)}
                    <Outlet/>
                </div>
            }
        </div>
    );
};
export {UserAlbums};