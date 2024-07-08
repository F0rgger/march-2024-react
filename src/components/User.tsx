import React, { Component } from 'react';
import { User } from '../interfaces/User';

interface UserProps {
    user: User;
    onUserSelect: (userId: number) => void;
}

class UserComponent extends Component<UserProps> {
    handleSelect = () => {
        this.props.onUserSelect(this.props.user.id);
    };

    render() {
        const { user } = this.props;

        return (
            <div>
                <h2>{user.firstName} {user.lastName}</h2>
                <button onClick={this.handleSelect}>Select User</button>
            </div>
        );
    }
}

export default UserComponent;