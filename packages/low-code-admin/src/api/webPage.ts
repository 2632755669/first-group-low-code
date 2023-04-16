import { get, post, type HttpResponse } from '../utils/fetch';
import { type PageType, type PageParamsType } from './types';

/**
 * 列表
 * @param data
 */

interface WebPageListParams extends PageParamsType {
  subSiteNo: string
  webPageName: string
  publishStatus: string
}

export interface WebPageListItem {
  publishStatus: string
  siteNo: string
  subSiteNo: string
  subSiteEndpointType: string
  webPageContentUrl: string
  webPageImgKey: string
  webPageImgUrl: string
  webPageName: string
  webPageNo: string
  webPageTitle: string
  webURI: string
}

interface WebPageList {
  page: PageType
  pageContent: WebPageListItem[]
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

export const getWebPageList = async (params: WebPageListParams) => {
  return await get<WebPageListParams, HttpResponse<WebPageList>>('/smart/manage/webPage/r/pageList', params).then(
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
interface AddWebPageParams {
  subSiteNo: string
  webPageName: string
  webPageTitle: string
  webURI: string
}
export const addWebPage = async (data: AddWebPageParams) => {
  return await post<AddWebPageParams, HttpResponse<string>>('/smart/manage/webPage/w/create', data);
};
/**
 * 编辑
 * @param data
 */
interface EditWebPageParams extends AddWebPageParams {
  webPageNo: string
}
export const editWebPage = async (data: EditWebPageParams) => {
  return await post<EditWebPageParams, HttpResponse<string>>('/smart/manage/webPage/w/editBaseInfo', data);
};
/**
 * 删除
 * @param data
 */
interface DeleteWebPageParams {
  webPageNo: string
}
export const deleteWebPage = async (data: DeleteWebPageParams) => {
  return await post<DeleteWebPageParams, HttpResponse<string>>('/smart/manage/webPage/w/delete', data);
};
/**
 * 发布
 * @param data
 */
interface PublishWebPageParams {
  webPageNo: string
}
export const publishWebPage = async (data: PublishWebPageParams) => {
  return await post<PublishWebPageParams, HttpResponse<string>>('/smart/manage/webPage/w/publish', data);
};
/**
 * 下线
 * @param data
 */
interface OfflineWebPageParams {
  webPageNo: string
}
export const offlineWebPage = async (data: OfflineWebPageParams) => {
  return await post<OfflineWebPageParams, HttpResponse<string>>('/smart/manage/webPage/w/offline', data);
};
