import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <h1>Welcome</h1>
            <p>Please choose a section:</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/comments">Comments</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
