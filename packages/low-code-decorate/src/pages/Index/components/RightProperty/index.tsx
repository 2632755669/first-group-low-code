
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { getStyle } from './style/tabStyle';
import l from "./index.less"
import { useContext } from 'react';
//@ts-ignore
import { getAttr } from './style/attr';
import { curComponentConText } from '@/contexts/componentList';
// console.log(l)



const items: TabsProps['items'] = [
  {
    key: '1',
    label: `样式`,

    children: getStyle(),
  },
  {
    key: '2',
    label: `属性`,
    children: getAttr(),
  },
  // {
  //   key: '3',
  //   label: `Tab 3`,
  //   children: `Content of Tab Pane 3`,
  // },
];

const onChange = (key: string) => {
  console.log(key);
};

export const RightProperty = () => {
  const { curComponent, dispatch } = useContext(curComponentConText)


  return <div>
    <div className='pl-2 py-6'>属性设置</div>
    {
      curComponent ? <Tabs className='custom-tab' defaultActiveKey="1" items={items} onChange={onChange}></Tabs> : null

    }
  </div>
}