import axios from 'axios';
import { User } from '../interfaces/User';
import { Post } from '../interfaces/Post';
import { Comment } from '../interfaces/Comment';

const API_BASE_URL = 'https://dummyjson.com';

interface UsersResponse {
    users: User[];
}

interface PostsResponse {
    posts: Post[];
}

interface CommentsResponse {
    comments: Comment[];
}

export const fetchUsers = (): Promise<UsersResponse> => {
    return axios.get(`${API_BASE_URL}/users`).then(response => response.data);
};

export const fetchPosts = (): Promise<PostsResponse> => {
    return axios.get(`${API_BASE_URL}/posts`).then(response => response.data);
};

export const fetchComments = (): Promise<CommentsResponse> => {
    return axios.get(`${API_BASE_URL}/comments`).then(response => response.data);
};
