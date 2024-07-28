import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api';
import { User } from '../interfaces/User';

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchUsers()
            .then(data => {
                setUsers(data.users);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName} - {user.email}
                        <Link to={`/posts/${user.id}`}> View Posts</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
