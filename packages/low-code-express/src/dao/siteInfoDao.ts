/* eslint-disable @typescript-eslint/no-explicit-any */
import * as mysql from 'mysql2/promise';

type SiteInfo = Partial<{
  id: number;
  name: string;
  domain: string;
  json: string;
}>

interface SiteInfoDao {
  findAll(): Promise<SiteInfo[]>;
  findById(id: number): Promise<SiteInfo>;
  create(siteInfo: SiteInfo): Promise<void>;
  update(id: number, siteInfo: SiteInfo): Promise<void>;
  delete(id: number): Promise<void>;
}

export function createSiteInfoDao(connection: mysql.Pool): SiteInfoDao {
  return {
    async findAll() {
      const [rows] = await connection.query('SELECT * FROM site');
      return rows as SiteInfo[];
    },

    async findById(id: number) {
      const [rows] = await connection.query<any>('SELECT * FROM site WHERE id = ?', [id]);
      return rows[0];
    },

    async create(siteInfo: SiteInfo) {
      await connection.query('INSERT INTO site SET ?', [siteInfo]);
    },

    async update(id: number, siteInfo: SiteInfo) {
      await connection.query('UPDATE site SET ? WHERE id = ?', [siteInfo, id]);
    },

    async delete(id: number) {
      await connection.query('DELETE FROM site WHERE id = ?', [id]);
    },
  };
}
