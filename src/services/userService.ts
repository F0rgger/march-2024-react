import axios from 'axios';
import { User } from '../types';

const API_URL = 'https://dummyjson.com/users';

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get(API_URL);
    return response.data.users;
};
