import * as mysql from 'mysql';

interface DBConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

export async function connectToDatabase(config: DBConfig): Promise<mysql.Connection> {
  const { host, user, password, database } = config;

  const connection = await mysql.createConnection({
    host,
    user,
    password,
    database,
  });

  console.log('Connected to database!');

  return connection;
}