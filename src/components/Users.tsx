import React, { Component } from 'react';
import { User } from '../interfaces/User';
import { getUsers } from '../services/userService';
import UserComponent from './User';

interface UsersState {
    users: User[];
}

interface UsersProps {
    onUserSelect: (userId: number) => void;
}

class Users extends Component<UsersProps, UsersState> {
    constructor(props: UsersProps) {
        super(props);
        this.state = {
            users: [],
        };
    }

    async componentDidMount() {
        const users = await getUsers();
        this.setState({ users });
    }

    render() {
        const { users } = this.state;
        const { onUserSelect } = this.props;

        return (
            <div>
                <h1>Users</h1>
                {users.map(user => (
                    <UserComponent key={user.id} user={user} onUserSelect={onUserSelect} />
                ))}
            </div>
        );
    }
}

export default Users;