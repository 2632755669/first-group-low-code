
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { getStyle } from './style/tabStyle';
import { getAttr } from './style/attr';
import { useComponentContext } from '@/hooks'

import "./index.less"



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
  const { selectedIds } = useComponentContext()

  return <div>
    <div className='pl-2 py-6'>属性设置</div>
    {
      selectedIds.length ?
        <Tabs
          className='custom-tab'
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        >
        </Tabs>
        :
        null
    }
  </div>
}