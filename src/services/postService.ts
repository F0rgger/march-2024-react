import axios from 'axios';
import { Post } from '../interfaces/Post';

const API_URL = 'https://dummyjson.com/posts';

export const getPostsByUserId = async (userId: number): Promise<Post[]> => {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data.posts;
};