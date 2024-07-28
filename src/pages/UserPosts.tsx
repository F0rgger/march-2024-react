import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../api';
import { Post } from '../interfaces/Post';
import { Link } from 'react-router-dom';

const UserPosts: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        if (userId) {
            fetchPosts()
                .then(data => {
                    setPosts(data.posts.filter(post => post.userId === parseInt(userId)));
                })
                .catch(error => console.error('Error fetching posts:', error));
        }
    }, [userId]);

    return (
        <div>
            <h1>Posts by User {userId}</h1>
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

export default UserPosts;
