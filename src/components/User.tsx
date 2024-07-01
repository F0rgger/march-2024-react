import React from 'react';
import { User as UserType } from '../types/userTypes';

interface UserProps {
    user: UserType;
    onSelectUser: (userId: number) => void;
}

const User: React.FC<UserProps> = ({ user, onSelectUser }) => {
    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <button onClick={() => onSelectUser(user.id)}>Show Posts</button>
        </div>
    );
}

export default User;
