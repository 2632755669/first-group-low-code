import { useState } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { AimOutlined, TabletOutlined, ApartmentOutlined, QuestionCircleOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './index.less'

const items: MenuProps['items'] = [
  {
    label: '大屏设计',
    key: 'design',
    icon: <AimOutlined />,
  },
  {
    label: '站点管理',
    key: 'site',
    icon: <TabletOutlined />,
  },
  {
    label: '组件管理',
    key: 'com',
    icon: <ApartmentOutlined />,
  },
]


const PageHeader = () => {
  const [current, setCurrent] = useState('design');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    // setCurrent(e.key);
  };

  return (
    <div className="PageHeader flex justify-between w-full">
      <div >
        lgoo
      </div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="pageheader-menu" />
      <div>
        <WhatsAppOutlined className="text-[24px] cursor-pointer" />
        <QuestionCircleOutlined className="text-[24px] ml-4 cursor-pointer" />
      </div>
    </div>
  )
}
export default PageHeader