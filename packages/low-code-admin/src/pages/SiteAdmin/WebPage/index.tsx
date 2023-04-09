/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { Layout, Button } from 'antd';
import { ProTable, type ActionType } from '@ant-design/pro-components';
import { PlusOutlined } from '@ant-design/icons';
import { columnDataHandle } from './components/ColumnData';

import './index.less';

const WebPage = () => {
  const actionRef = useRef<ActionType>();

  const columnObj = {
  };

  const requestHandle = async (params: any) => {
    return {
      success: true,
      total: 0,
      data: []
    };
  };
  return (
    <Layout>
      <ProTable
        columns={columnDataHandle(columnObj) as any}
        rowKey="subSiteNo"
        actionRef={actionRef}
        request={requestHandle}
        scroll={{ x: '100%' }}
        pagination={{
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 30, 50],
          defaultPageSize: 10
        }}
        toolBarRender={() => {
          return [
            <Button key="add" icon={<PlusOutlined />} type="primary">
              新增
            </Button>
          ];
        }}
      />
    </Layout>
  );
};

export default WebPage;
