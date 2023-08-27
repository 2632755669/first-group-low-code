/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as mysql from 'mysql2/promise';
import { createSiteInfoDao } from '../dao/siteInfoDao';

type SiteInfo = Partial<{
  id: number;
  name: string;
  domain: string;
  json: string;
}>

interface SiteInfoService {
  getAllSiteInfo(): Promise<SiteInfo[]>;
  getSiteInfoById(id: number): Promise<SiteInfo>;
  createSiteInfo(SiteInfo: SiteInfo): Promise<void>;
  updateSiteInfo(id: number, SiteInfo: SiteInfo): Promise<void>;
  deleteSiteInfo(id: number): Promise<void>;
}

export function createSiteInfoService(connection: mysql.Pool): SiteInfoService {
  const siteInfoDao = createSiteInfoDao(connection);

  return {
    async getAllSiteInfo() {
      return siteInfoDao.findAll();
    },

    async getSiteInfoById(id: number) {
      const siteInfo = await siteInfoDao.findById(id);

      if (!siteInfo) {
        throw new Error(`SiteInfo with id ${id} not found`);
      }

      return siteInfo;
    },
    async createSiteInfo(siteInfo: SiteInfo) {
      const existingSiteInfo = await siteInfoDao.findById(siteInfo.id as number);

      if (existingSiteInfo) {
        throw new Error(`SiteInfo with email ${siteInfo.id} already exists`);
      }

      await siteInfoDao.create(siteInfo);
    },

    async updateSiteInfo(id: number, siteInfo: SiteInfo) {
      const existingSiteInfo = await siteInfoDao.findById(id);

      if (!existingSiteInfo) {
        throw new Error(`SiteInfo with id ${id} not found`);
      }

      await siteInfoDao.update(id, siteInfo);
    },

    async deleteSiteInfo(id: number) {
      const existingSiteInfo = await siteInfoDao.findById(id);

      if (!existingSiteInfo) {
        throw new Error(`SiteInfo with id ${id} not found`);
      }

      await siteInfoDao.delete(id);
    },
  };
}