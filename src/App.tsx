import React, { useState } from 'react';
import Users from './components/Users';
import { Post } from './types';
import { getPostsByUserId } from './services/postService';

const App: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    const handleUserSelect = async (userId: number) => {
        setSelectedUserId(userId);
        const userPosts = await getPostsByUserId(userId);
        setPosts(userPosts);
    };

    return (
        <div className="App">
            <h1>Users</h1>
            <Users onUserSelect={handleUserSelect} />
            {selectedUserId && (
                <div>
                    <h2>Posts by User {selectedUserId}</h2>
                    <ul>
                        {posts.map((post) => (
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
};

export default App;
