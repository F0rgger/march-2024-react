import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const fetchUsers = () => {
    return axios.get(`${API_BASE_URL}/users`);
};

export const fetchPosts = () => {
    return axios.get(`${API_BASE_URL}/posts`);
};

export const fetchComments = () => {
    return axios.get(`${API_BASE_URL}/comments`);
};
