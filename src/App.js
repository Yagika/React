import Comments from "./components/Comments/Comments/Comments";

import Posts from "./components/Posts/Posts/Posts";

import Users from "./components/Users/Users/Users";

import './App.css';

function App() {
  return (
    <div className="App">
      <Users/>
      <Posts/>
      <Comments/>
    </div>
  );
}

export default App;
