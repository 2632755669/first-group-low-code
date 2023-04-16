/* eslint-disable @typescript-eslint/no-explicit-any */
// 获取分页数据
export const getPageData = (data: any[], body: any) => {
  const { pageNo, pageSize } = body;
  const totalPageCount = Math.ceil(data.length / pageSize);
  const totalCount = data.length;
  const start = pageSize * (pageNo - 1);
  const end = pageNo * pageSize;
  const pageContent = data.slice(start, end);
  return {
    code: 0,
    message: '',
    data: {
      pageContent,
      page: {
        pageNo,
        pageSize,
        totalCount,
        totalPageCount
      }
    }
  };
};
