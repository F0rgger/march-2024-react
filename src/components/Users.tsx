import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';
import { User as UserType } from '../types/userTypes';
import UserComponent from './User';

interface UsersProps {
    onSelectUser: (userId: number) => void;
}

const Users: React.FC<UsersProps> = ({ onSelectUser }) => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        getUsers().then((users) => setUsers(users));
    }, []);

    return (
        <div>
            {users.map((user) => (
                <UserComponent key={user.id} user={user} onSelectUser={onSelectUser} />
            ))}
        </div>
    );
}

export default Users;
