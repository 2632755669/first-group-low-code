import { useCallback } from 'react';
import { Layout, Tooltip, Popover } from 'antd';
import { QuestionCircleOutlined, CustomerServiceOutlined, UserOutlined } from '@ant-design/icons';
import { Logo } from './components/Logo';

const { Header } = Layout;

export const SmtHeader = () => {
  const logout = useCallback(() => {
    console.log('退出账号');
  }, []);

  return (
    <Header className="header-container">
      <div className="header-left">
        <Logo />
      </div>
      <div className="header-right">
        <Tooltip placement="bottom" color="#40a9ff" title="帮助文档">
          <QuestionCircleOutlined />
        </Tooltip>
        <Tooltip placement="bottom" color="#40a9ff" title="咨询反馈">
          <CustomerServiceOutlined />
        </Tooltip>
        <Popover
          content={() => (
            <span className="header-logout point" onClick={logout}>
              退出
            </span>
          )}
        >
          <UserOutlined />
        </Popover>
      </div>
    </Header>
  );
};
