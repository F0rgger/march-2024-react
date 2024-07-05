import axios from 'axios';
import { Post } from '../types';

const API_URL = 'https://dummyjson.com/posts/user/';

export const getPostsByUserId = async (userId: number): Promise<Post[]> => {
    const response = await axios.get(`${API_URL}${userId}`);
    return response.data.posts;
};
