import React, { useState, useEffect } from 'react';
import { getPostsByUserId } from './services/postService';
import { Post } from './types/postTypes';
import Users from './components/Users';

const App: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        if (selectedUserId !== null) {
            getPostsByUserId(selectedUserId).then((posts) => setPosts(posts));
        }
    }, [selectedUserId]);

    return (
        <div className="App">
            <h1>Users</h1>
            <Users onSelectUser={setSelectedUserId} />
            {selectedUserId && (
                <div>
                    <h2>Posts by User {selectedUserId}</h2>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
