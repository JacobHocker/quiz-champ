import React from 'react'
import {NavLink as Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
            <Link to='/'>
                <h1>Home Page</h1>
            </Link>
        </div>
    )
}

export default Nav