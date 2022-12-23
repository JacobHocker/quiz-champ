import React, { useState } from 'react';
import  Axios  from 'axios';
import './UserLogin.css';

function UserLogin({ setUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        Axios.post("http://localhost:2000/login", {
            username: username,
            password: password,
        })
        .then((response) =>{
            if(response.data.message) {
                setUser(response.data.message)
            } else {
                setUser(response.data[0])
            }
        })
    }

    
    return (
        <div className='login-form-container'>
            <div className='login-form'>
                <h1>Login</h1>
                <label>Username:</label>
                <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={login}>Login Account</button>
            </div>
            <div className='link-register-container'>
                <h3>Don't have an account?</h3>
                <a href='/register'>
                    <button>Register Account</button>
                </a>
            </div>
        </div>
    )
}

export default UserLogin