import axios from 'axios';
import { User } from '../types/userTypes';

const BASE_URL = 'https://dummyjson.com';

 const getUsers = (): Promise<User[]> => {
    return axios.get(`${BASE_URL}/users`)
        .then(response => response.data.users)
        .catch(error => {
            console.error("Error", error);
            return []; // Повертаємо порожній масив у разі помилки
        });
};
export {getUsers}