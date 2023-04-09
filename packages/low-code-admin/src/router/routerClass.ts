/* eslint-disable @typescript-eslint/no-explicit-any */
import { type RouterItem } from './router';
// 添加UUID
const uuid = (function () {
  let i = 0;
  return () => {
    return `menu-${i++}`;
  };
})();
// 遍历树

const forEach = (tree: any, callback: any) => {
  const temp = [...tree];
  while (temp.length > 0) {
    const item = temp.shift();
    if (item.children) {
      temp.push(...item.children);
    }
    const flag = callback(item);
    // 如果返回false，就中止迭代
    if (flag === false) {
      break;
    }
  }
};
/**
 * mix 模式的混合模式
 */
export class RouterParse {
  private readonly routes: RouterItem[] = [];

  constructor(routes: RouterItem[]) {
    this.routes = routes.slice(0) || [];
    this.preHandleRouteDatas();
  }

  // 处理所有路由数据，给所有的路由数据添加Key
  private preHandleRouteDatas() {
    forEach(this.routes, (item: any) => {
      if (!item.key) {
        item.key = uuid();
      }
    });
  }

  // 返回所有的路由信息
  getRoutes() {
    return this.routes;
  }

  // 获取所有菜单数据
  getTopMenuData() {
    return this.routes.map((_) => {
      return {
        name: _.name,
        key: _.key,
        path: _.path,
        icon: _.icon
      };
    });
  }

  // 生成侧边栏菜单
  getSiderMenu(key: string) {
    const item = this.routes.find((_) => _.key === key);
    return item?.children ?? [];
  }

  // 生成所有路由信息
  getFlatRoutes() {
    const out: any = [];
    forEach(this.routes, (item: any) => {
      if (item.component) {
        out.push(item);
      }
    });
    return out;
  }

  // 寻找里面pathname匹配的路由信息
  routeMatch(selectkey: any, pathname: string) {
    const routes = this.getSiderMenu(selectkey);
    let item;
    forEach(routes, (_: any) => {
      // 待完善，如果是动态路由需要做正则替换。
      if (_.path === pathname) {
        item = _;
        return false;
      }
    });
    return item;
  }
}
