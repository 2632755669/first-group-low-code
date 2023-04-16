/* eslint-disable @typescript-eslint/no-explicit-any */
import { type RouterItem } from '@/router/router';

export function flatRouteToMenuItem(data: RouterItem[], props: any) {
  const out = [];
  const { menuItemRender } = props;
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    const defaultItem = (
      <span className="smt-sider-menu-item">
        {item.icon}
        <span className="smt-sider-menu-title">{item.name}</span>
      </span>
    );
    let label;
    if (menuItemRender) {
      label = menuItemRender(item, defaultItem);
    }

    const newItem = {
      ...item,
      label: menuItemRender ? label : defaultItem,
      icon: null
    };
    if (item.children) {
      newItem.children = flatRouteToMenuItem(item.children, props);
    }
    out.push(newItem);
  }
  return out;
}
