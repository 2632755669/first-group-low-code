import { get, post, type HttpResponse } from '../utils/fetch';
import { type PageType, type PageParamsType } from './types';

/**
 * 列表
 * @param data
 */

interface WebSiteListParams extends PageParamsType {
  siteName?: string
}

export interface WebSiteListItem {
  host: string
  siteName: string
  siteNo: string
}

interface WebSiteList {
  page: PageType
  pageContent: WebSiteListItem[]
}

const initPageData = {
  pageContent: [],
  page: {
    pageNo: 1,
    pageSize: 10,
    totalCount: 0,
    totalPageCount: 0
  }
};

export const getWebSiteList = async (params: WebSiteListParams) => {
  return await get<WebSiteListParams, HttpResponse<WebSiteList>>('/smart/manage/site/r/pageList', params).then(
    ({ data, code, message }) => {
      if (code === 0) {
        return data;
      }
      return { ...initPageData };
    }
  );
};

/**
 * 新增
 * @param data
 */
interface AddWebSiteParams {
  host: string
  siteName: string
}
export const addWebSite = async (data: AddWebSiteParams) => {
  return await post<AddWebSiteParams, HttpResponse<string>>('/smart/manage/site/w/create', data);
};
/**
 * 编辑
 * @param data
 */
interface EditWebSiteParams extends AddWebSiteParams {
  siteNo: string
}
export const editWebSite = async (data: EditWebSiteParams) => {
  return await post<EditWebSiteParams, HttpResponse<string>>('/smart/manage/site/w/edit', data);
};
