import React from 'react'
import {NavLink as Link} from 'react-router-dom';
import './Nav.css';


function Nav({ user }) {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <p>Home Page</p>
            </Link>
            <Link to='/quizzes'>
                <p>Quiz List</p>
            </Link>
            <Link to='/quiz-submit'>
                <p>Submit Quiz</p>
            </Link>
            <Link to='/question-submit'>
                <p>Submit Question</p>
            </Link>
            <Link to='/login'>
                <button>Register/Login</button>
            </Link>
            {user === null ? <div></div> : <p>{user.username}</p>}
        </div>
    )
}

export default Nav