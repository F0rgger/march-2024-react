import axios from 'axios';
import { Post } from '../types/postTypes';

const BASE_URL = 'https://dummyjson.com';

export const getPostsByUserId = (userId: number): Promise<Post[]> => {
    return axios.get(`${BASE_URL}/posts/user/${userId}`)
        .then(response => response.data.posts)
        .catch(error => {
            console.error("Error", error);
            return []; // Повертаємо порожній масив у разі помилки
        });
};

// Додайте цей рядок для експорту типу Post
export type { Post };
