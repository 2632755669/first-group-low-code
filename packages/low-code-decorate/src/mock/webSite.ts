import Mock from 'mockjs'
import { getPageData } from './utils'

const operateLogList = Mock.mock({
  'data|20-60': [
    {
      operateObjectName: '@ctitle',
      operateObjectKey: '@increment(1)',
      operateType: '@word',
      operatorName: '@cname',
      operatorMis: '@last',
      createTime: '@integer(@date(T)'
    }
  ]
})

// 获取操作日志列表
Mock.mock('/smart/manage/operateLog/r/TOperateLogService_pageOperateLog', 'post', (options) => {
  const body = JSON.parse(options.body)
  const { data } = operateLogList
  return getPageData(data, body)
})
