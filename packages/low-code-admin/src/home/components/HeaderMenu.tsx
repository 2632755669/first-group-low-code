/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu } from 'antd';
import { type RouterItem } from '@/router/router';

interface Props {
  menuData: RouterItem[]
  toggle: (key: string) => void
  selectedkeys: string[]
}

export const HeaderMenu = (props: Props) => {
  const { menuData, toggle, selectedkeys } = props;
  const menuItems = (menuData || []).map((_) => {
    return {
      label: _.name,
      icon: _.icon,
      key: _.key
    };
  });

  return (
    <Menu
      mode="horizontal"
      className="header-menu-containers"
      items={menuItems as any}
      selectedKeys={selectedkeys}
      onClick={({ key }) => {
        toggle(key);
      }}
    />
  );
};
