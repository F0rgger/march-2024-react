
import React, { Component } from 'react';
import Users from './components/Users';
import { Post } from './interfaces/Post';
import { getPostsByUserId } from './services/postService';

interface AppState {
    selectedUserId: number | null;
    posts: Post[];
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedUserId: null,
            posts: [],
        };
    }

    handleUserSelect = async (userId: number) => {
        const posts = await getPostsByUserId(userId);
        this.setState({ selectedUserId: userId, posts });
    };

    render() {
        const { posts } = this.state;

        return (
            <div>
                <Users onUserSelect={this.handleUserSelect} />
                {posts.length > 0 && (
                    <div>
                        <h2>Posts</h2>
                        <ul>
                            {posts.map(post => (
                                <li key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
