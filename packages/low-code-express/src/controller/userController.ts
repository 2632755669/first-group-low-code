import express from 'express';
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createUserService } from '../service/userService';

interface User {
  id?: number;
  username: string;
  pwd: string;
  name: string;
  email: string;
}

export function createUserController(connection: mysql.Pool) {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());
  const userService = createUserService(connection);

  app.get('/users', async (req, res) => {
    console.log('123');
    const users = await userService.getAllUsers();
    res.json(users);
  });

  app.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = await userService.getUserById(id);
    res.json(user);
  });

  app.post('/users', async (req, res) => {
    const user = req.body as User;
    await userService.createUser(user);
    res.json({ message: 'User created' });
  });

  app.put('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = req.body as User;
    await userService.updateUser(id, user);
    res.json({ message: 'User updated' });
  });

  app.delete('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    await userService.deleteUser(id);
    res.json({ message: 'User deleted' });
  });

  return app;
}