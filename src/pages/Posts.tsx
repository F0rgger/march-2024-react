import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../api';
import { Post } from '../interfaces/Post';

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetchPosts()
            .then(data => {
                setPosts(data.posts);
            })
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/comments/${post.id}`}>View Comments</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
