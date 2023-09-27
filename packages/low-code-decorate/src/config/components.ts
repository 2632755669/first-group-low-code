import { Text } from '../baseComponent'
import { DisplayContainer, RootContainer } from '../coreComponents'
import { IComponentMap, IComponentInstanceMap, IComponentTree } from '@/types'
import { generateUUID } from '@/utils/generateUUID'
 import { ComponentNameEnum } from '@/enums'

export const COMPONENT_INSTACE_MAP: IComponentInstanceMap = {
  [ComponentNameEnum.Root]: RootContainer,
  [ComponentNameEnum.Text]: Text,
  [ComponentNameEnum.DisplayContainer]: DisplayContainer,
}

export const COMPONENT_MAP: IComponentMap = {
  [ComponentNameEnum.Root]: {
    componentName: ComponentNameEnum.Root,
    title: 'root',
    group: 'base',
    properties: [
      {
        name: 'text',
        propType: 'input',
        description: '文本输入',
        defaultValue: '文本'
      }
    ]
  },
  [ComponentNameEnum.Text]: {
    componentName: ComponentNameEnum.Text,
    title: '文本',
    group: 'base',
    properties: [
      {
        name: 'text',
        propType: 'input',
        description: '文本输入',
        defaultValue: '文本'
      }
    ]
  },
  [ComponentNameEnum.DisplayContainer]: {
    componentName: ComponentNameEnum.DisplayContainer,
    title: 'flex布局',
    group: 'container',
    properties: [
      {
        name: 'width',
        propType: 'input',
        description: '宽',
        defaultValue: '300'
      }
    ]
  },
}

export const getComponentInfo = (componentName: ComponentNameEnum, parentIds: string[]): IComponentTree => {
  const props = COMPONENT_MAP[componentName].properties?.reduce((pre, item) => {
    pre[item.name] = item.defaultValue
    return pre
  }, {} as Record<string, any>)
  return {
    componentName,
    props,
    id: generateUUID(),
    parentIds,
    children: []
  }
}