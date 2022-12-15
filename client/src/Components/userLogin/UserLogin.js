import React from 'react';
import './UserLogin.css';

function UserLogin() {
    return (
        <div className='login-form-container'>
            <div className='login-form'>
                <h1>Login</h1>
                <label>Username:</label>
                <input type="text" placeholder='Username' />
                <label>Password:</label>
                <input type='password' placeholder='Password' />
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