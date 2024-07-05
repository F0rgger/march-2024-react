import React, { useEffect, useState } from 'react';
import User from './User';
import { getUsers } from '../services/userService';
import { User as UserType } from '../types';

interface UsersProps {
    onUserSelect: (userId: number) => void;
}

const Users: React.FC<UsersProps> = ({ onUserSelect }) => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} onUserSelect={onUserSelect} />
            ))}
        </div>
    );
};

export default Users;
