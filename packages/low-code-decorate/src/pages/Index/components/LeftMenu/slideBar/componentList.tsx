
import { useRef, useCallback, useMemo } from 'react';
import {ComponentGroupList} from '@/enums'
import {componentList} from '@/pages/Index/load'
import { Menu, type MenuProps } from 'antd'
import { componentOptions } from '../data'
import { useDrag } from 'ahooks'
type MenuItem = Required<MenuProps>['items'][number]

interface IMenuItemDragLabelProps {
  label: string;
  componentId: string;
}

const MenuItemDragLabel = (props: IMenuItemDragLabelProps) => {
  const { label, componentId } = props
  const labelRef = useRef(null)

  const handleDragStart = useCallback((e: React.DragEvent) => {
    e.dataTransfer!.setData('componentid',  componentId) 
  }, [componentId])

  useDrag('', labelRef, {
    onDragStart: handleDragStart
  })
  return <div ref={labelRef} data-componentid={componentId} draggable>{ label}</div>
}


const MenuList = () => {
	
  const items = useMemo<MenuProps['items']>(() => {
    const options = componentOptions.reduce((pre: MenuItem[], item) => {
      const menuSubs = (item.children || []).map(menuSub => {
        return {
          label: <MenuItemDragLabel label={menuSub.label} componentId={menuSub.key} />,
          key: menuSub.key,
        }
      })
      pre.push({
        label: item.label,
        key: item.key,
        icon: item.icon,
        children: menuSubs,
        type: item.type
      })
      return pre
    }, []) 
    return options
  }, [])

  return (<Menu
		theme={'dark'}
    style={{ width: '100%' }}
    defaultSelectedKeys={[componentOptions[0].children![0].key]}
    defaultOpenKeys={[componentOptions[0].key]}
    mode="inline"
    items={items}
  />)
}

export default MenuList