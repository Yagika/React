import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import {
    NotFoundPage,
    PostsPage,
    SinglePostPage,
    SingleUserPage,
    UsersPage,
    UserPostsPage,
    PostCommentsPage,
    AlbumPhotos,
    UserAlbums
} from "./pages";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<UserAlbums/>}>
                            <Route path={':albumId/photos'} element={<AlbumPhotos/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    )
        ;
}

export default App;
