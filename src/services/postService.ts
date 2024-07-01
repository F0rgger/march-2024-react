import axios from 'axios';
import { Post } from '../types/postTypes';

const BASE_URL = 'https://dummyjson.com';

const getPostsByUserId = (userId: number): Promise<Post[]> => {
    return axios.get(`${BASE_URL}/posts/user/${userId}`)
        .then(response => response.data.posts)
        .catch(error => {
            console.error("Error", error);
            return [];
        });
};

export {getPostsByUserId}

