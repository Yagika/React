import {useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import './AlbumPhotos.css';
import Photo from "../../components/Photo/Photo";

const AlbumPhotos = () => {
    const {id} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        userService.getAlbumsById(id).then(value => setPhotos([...value]))
    }, [id]);

    return (
        <div>
            {photos &&
                <div className={'aphotos'}>
                    {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
                    <Outlet/>
                </div>
            }
        </div>
    );
};
export {AlbumPhotos};