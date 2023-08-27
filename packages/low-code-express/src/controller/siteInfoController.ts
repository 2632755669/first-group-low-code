/* eslint-disable @typescript-eslint/no-explicit-any */
import mysql from 'mysql2/promise';
import { createSiteInfoService } from '../service/siteInfoService';

type SiteInfo = Partial<{
  id: number;
  name: string;
  domain: string;
  json: string;
}>

const resData = (code: number, message: string, data: any) => {
  return {
    message: message || '',
    code: code || 1,
    data: data,
  };
};

export function siteInfoController(app: any, connection: mysql.Pool) {

  const siteInfoService = createSiteInfoService(connection);

  app.get('/site', async (req: any, res: any) => {
    // const siteInfo = await siteInfoService.getAllSiteInfo();
    // res.json(resData(0, '', siteInfo));
    await siteInfoService.createSiteInfo({ name: 'name1', domain: '11111', json: '{"a": "1"}' });
    res.json(resData(0, '创建成功', null));
    // res.json(resData(0, '', { a: 1 }));
  });

  app.get('/site/:id', async (req: any, res: any) => {
    const id = parseInt(req.params.id, 10);
    const siteInfo = await siteInfoService.getSiteInfoById(id);
    res.json(resData(0, '', siteInfo));
  });

  app.post('/site/create', async (req: any, res: any) => {
    const body = req.body as SiteInfo;
    try {
      await siteInfoService.getSiteInfoById(req.id);
      await siteInfoService.createSiteInfo(body);
      res.json(resData(0, '创建成功', null));
    } catch (error) {
      res.json(resData(1, '该名称已存在', null));
    }
  });

  app.post('/site/update/:id', async (req: any, res: any) => {
    const body = req.body as SiteInfo;
    await siteInfoService.createSiteInfo(body);
    res.json(resData(0, '更新成功', null));
  });

  app.post('/site/delete/:id', async (req: any, res: any) => {
    const id = parseInt(req.params.id, 10);
    await siteInfoService.deleteSiteInfo(id);
    res.json(resData(0, '删除成功', null));
  });

  return app;
}