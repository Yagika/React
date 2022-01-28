import {urls} from "../configs/Urls";

const getAllUsers = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

const getUserId = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(value => value.data)
}

const getPosts = (id) => {
    return fetch(`${urls.posts}?userId=${id}`)
        .then(value => value.json())
}

export const service = {getAllUsers, getPosts, getUserId}