import * as mysql from 'mysql2/promise';
import { createUserDao } from '../dao/userDao';

interface User {
  id?: number;
  name: string;
  username: string;
  pwd: string;
  email: string;
}

interface UserService {
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User>;
  createUser(user: User): Promise<void>;
  updateUser(id: number, user: User): Promise<void>;
  deleteUser(id: number): Promise<void>;
}

export function createUserService(connection: mysql.Pool): UserService {
  const userDao = createUserDao(connection);

  return {
    async getAllUsers() {
      return userDao.findAll();
    },

    async getUserById(id: number) {
      const user = await userDao.findById(id);

      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }

      return user;
    },
    async createUser(user: User) {
      const existingUser = await userDao.findById(user.id || '');

      if (existingUser) {
        throw new Error(`User with email ${user.email} already exists`);
      }

      await userDao.create(user);
    },

    async updateUser(id: number, user: User) {
      const existingUser = await userDao.findById(id);

      if (!existingUser) {
        throw new Error(`User with id ${id} not found`);
      }

      await userDao.update(id, user);
    },

    async deleteUser(id: number) {
      const existingUser = await userDao.findById(id);

      if (!existingUser) {
        throw new Error(`User with id ${id} not found`);
      }

      await userDao.delete(id);
    },
  };
}