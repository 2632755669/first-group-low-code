import express from 'express';
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser';
import cors from 'cors';
import { userController } from './userController';
import { siteInfoController } from './siteInfoController';

export function createController(connection: mysql.Pool) {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  userController(app, connection);
  siteInfoController(app, connection);

  return app;
}