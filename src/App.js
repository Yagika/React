import {useState,useEffect} from "react";

import Form from "./components/Form/Form/Form";
import './App.css';
import Users from "./components/Users/Users/Users";

function App() {
    let [users, setUsers] = useState([]);
    let [filUsers, setFilUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
                setFilUsers([...value])
            })
    }, [])
    const filter=(data)=>{
        let filtarr=[...users];
        if (data.name){
            filtarr=filtarr.filter(value=>value.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username){
            filtarr=filtarr.filter(value=>value.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email){
            filtarr=filtarr.filter(value=>value.email.toLowerCase().toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilUsers(filtarr);
    }
    return (
        <div className="App">
            <div>
                <Form filter={filter}/>
            </div>
            <div>
                <Users users={filUsers}/>
            </div>
        </div>
    );
}

export default App;
