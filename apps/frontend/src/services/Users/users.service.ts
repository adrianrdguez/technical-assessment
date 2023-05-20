import axios from 'axios';
import { User } from './users.models';

const API_URL = 'http://localhost:3333/api/users';

const fetchUsers = async (page: number): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(`${API_URL}?page=${page}&limit=10`);
    const updatedData = response.data.map((user) => ({
      ...user,
      fullName: `${user.name} ${user.lastName}`,
    }));
    return updatedData;
  } catch (error) {
    console.log('Error fetching users:', error);
    throw error;
  }
};

const createUser = async (user: User): Promise<User> => {
  try {
    const response = await axios.post<User>(API_URL, user);
    return response.data;
  } catch (error) {
    console.log('Error creating user:', error);
    throw error;
  }
};

export {
  fetchUsers,
  createUser
};
