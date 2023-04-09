import React from 'react';
import { Spin } from 'antd';
import './index.less';

export const PageLoading = () => {
  return (
    <div className="smt-page-loading">
      <Spin tip="页面加载中" />
    </div>
  );
};
