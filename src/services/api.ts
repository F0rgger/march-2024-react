import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const createPost = async (data: { title: string; body: string; userId: number }) => {
    const response = await api.post('/posts', data);
    return response.data;
};
