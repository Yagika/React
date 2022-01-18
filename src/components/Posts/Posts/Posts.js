import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";

import './Posts.css'

const Posts = () => {
    const[posts, setPosts]=useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setPosts(value.filter(val=>val.launch_year!=='2020')))
    },[])
    return (
        <div className={'wrap'}>
        {posts.map(value=><Post key={value.flight_number} name={value.mission_name} year={value.launch_year} img={value.links.mission_patch_small}/>)}
        </div>
    );
};

export default Posts;
