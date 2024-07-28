import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../api';
import { Comment } from '../interfaces/Comment';

const PostComments: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        if (postId) {
            fetchComments()
                .then(data => {
                    setComments(data.comments.filter(comment => comment.postId === parseInt(postId)));
                })
                .catch(error => console.error('Error fetching comments:', error));
        }
    }, [postId]);

    return (
        <div>
            <h1>Comments for Post {postId}</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p>{comment.body}</p>
                        <small>Posted by User ID: {comment.userId}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostComments;
