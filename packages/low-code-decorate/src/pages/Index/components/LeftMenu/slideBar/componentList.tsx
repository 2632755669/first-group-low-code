
import {ComponentGroupList} from '@/enums'
import {componentList} from '@/pages/Index/load'
import { EditOutlined, CodepenOutlined } from '@ant-design/icons';
import { Menu, type MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const handleDragStart = (e: any) => {
	// console.log(e)
  e.dataTransfer!.setData('componentName', e.target!.dataset.component)
}

const items: MenuProps['items'] = [
	getItem('基本', 'sub1', <CodepenOutlined />, [
		getItem(<div draggable="true" 
		data-component={componentList.StaticText.componentName} 
		onDragStart={handleDragStart}>
			静态文本
		</div>, '1')
	]),	
	{ type: 'divider' },
	getItem('文本', 'sub2', <EditOutlined />, [
		getItem(<div >静态文本</div>, '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
];

// 遍历动态生成左侧组件列表
// Object.keys(componentList).forEach( item => {
	
// });



const ComponentList = () => {
	
	const onClick: MenuProps['onClick'] = (e) => {
		// console.log('click ', e);
	};
  return (<Menu
		theme={'dark'}
    onClick={onClick}
    style={{ width: '100%' }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    items={items}
  />)
}

export default ComponentList