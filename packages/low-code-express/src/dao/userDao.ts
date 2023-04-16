import * as mysql from 'mysql2/promise';

interface User {
  id?: number;
  name: string;
  username: string;
  pwd: string;
  email: string;
}

interface UserDao {
  findAll(): Promise<User[]>;
  findById(id: number | string): Promise<User>;
  create(user: User): Promise<void>;
  update(id: number, user: User): Promise<void>;
  delete(id: number): Promise<void>;
}

export function createUserDao(connection: mysql.Pool): UserDao {
  return {
    async findAll() {
      const [rows] = await connection.query('SELECT * FROM users');
      return rows as User[];
    },

    async findById(id: number) {
      const [rows] = await connection.query<any>('SELECT * FROM users WHERE id = ?', [id]);
      return rows[0];
    },

    async create(user: User) {
      await connection.query('INSERT INTO users SET ?', [user]);
    },

    async update(id: number, user: User) {
      await connection.query('UPDATE users SET ? WHERE id = ?', [user, id]);
    },

    async delete(id: number) {
      await connection.query('DELETE FROM users WHERE id = ?', [id]);
    },
  };
}
