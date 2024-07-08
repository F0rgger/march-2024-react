import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';
import { User } from '../interfaces/User';

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchUsers()
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.firstName} {user.lastName} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
