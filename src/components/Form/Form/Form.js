import {useState} from "react";

import './Form.css';

const Form = ({filter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});
    const send = (e) => {
        e.preventDefault()
        filter(form);
    }
    const formHandler = (e) => {
        const name = e.target.name;
        setForm({...form, [name]: e.target.value})
    }
    return (
        <div>
            <form onSubmit={send}>
                <div className={'inner'}>
                    <div className={'value'}>
                        <label>Name:<input type='text' name={'name'} value={form.name}
                                           onChange={formHandler}/></label>
                    </div>

                    <div className={'value'}>
                        <label>Username:<input type='text' name={'username'} value={form.username}
                                               onChange={formHandler}/></label>
                    </div>

                    <div className={'value'}>
                        <label>Email:<input type='text' name={'email'} value={form.email}
                                            onChange={formHandler}/></label>
                    </div>
                    <button onClick={send}>Find</button>
                </div>
            </form>
        </div>
    );
};

export default Form;