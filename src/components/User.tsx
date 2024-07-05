import React from 'react';
import { User as UserType } from '../types';

interface UserProps {
    user: UserType;
    onUserSelect: (userId: number) => void;
}

const User: React.FC<UserProps> = ({ user, onUserSelect }) => {
    return (
        <div>
            <h3>{user.firstName} {user.lastName}</h3>
            <button onClick={() => onUserSelect(user.id)}>View Posts</button>
        </div>
    );
};

export default User;
