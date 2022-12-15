import React, { useState } from 'react'
import './UserRegister.css'

function UserRegister() {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [bioReg, setBioReg] = useState('');
    const [crowns, setCrowns] = useState(0);

    return (
        <div className='register-form-container'>
            <div className='register-form'>
                <h1>Register:</h1>
                <label>Username:</label>
                <input type="text" name='username' onChange={(e) => setUsernameReg(e.target.value)}/>
                <label>Password:</label>
                <input type='password' name='password' onChange={(e) => setPasswordReg(e.target.value)}/>
                <label>Bio:</label>
                <textarea type='text' rows={6} placeholder='Tell a little about yourself' onChange={(e) => setBioReg(e.target.value)}/>
            </div>
            <div className='link-login-container'>
                <h3>Already have an account?</h3>
                <a href='/login'>
                    <button>Login Account</button>
                </a>
            </div>
        </div>
    )
}

export default UserRegister
