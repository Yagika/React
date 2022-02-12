import './Photo.css'
const Photo = ({photo}) => {
    let {id, title,thumbnailUrl} = photo;
    return (
        <div className={'photo'}>
            <h3>{id}. {title}</h3>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export default Photo;