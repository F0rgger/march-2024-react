import React, { useEffect, useState } from 'react';
import { fetchComments } from '../api';
import { Comment } from '../interfaces/Comment';

const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetchComments()
            .then(response => {
                setComments(response.data.comments);
            })
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p>{comment.body}</p>
                        <small>Post ID: {comment.postId}, User ID: {comment.userId}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
