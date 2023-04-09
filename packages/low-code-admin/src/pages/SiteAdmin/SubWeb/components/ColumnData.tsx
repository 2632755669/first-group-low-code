/* eslint-disable @typescript-eslint/no-explicit-any */
import { Space, Button } from 'antd';

export function columnDataHandle(columnData: any) {
  return [
    {
      title: '站点名称',
      dataIndex: 'subSiteName',
      key: 'subSiteName',
      width: 150
    },
    {
      title: '域名',
      dataIndex: 'subSiteName',
      key: 'subSiteName',
      width: 150
    },
    {
      title: '操作',
      key: 'actions',
      width: 370,
      fixed: 'right',
      hideInSearch: true,
      render: () => {
        return (
          <Space size={0} align="center">
            <Button
              type="link"
            >
              编辑
            </Button>
            <Button
              type="link"
            >
              发布
            </Button>
            <Button
              type="link"
            >
              下线
            </Button>
          </Space>
        );
      }
    }
  ];
}
