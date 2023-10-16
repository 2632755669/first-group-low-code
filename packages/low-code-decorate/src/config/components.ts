import { Text } from '../baseComponent'
import { DisplayContainer, RootContainer } from '../coreComponents'
import { IComponentMap, IComponentInstanceMap, IComponentTree, IComponentProps } from '@/types'
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
    properties: []
  },
  [ComponentNameEnum.Text]: {
    componentName: ComponentNameEnum.Text,
    title: '文本',
    group: 'base',
    properties: [
      {
        key: 'text',
        title: 'text',
        type: 'input',
        property: {},
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
        key: 'width',
        title: 'width',
        type: 'input',
        property: {},
        defaultValue: '300'
      }
    ]
  },
}

export const getComponentInfo = (componentName: ComponentNameEnum, parentIds: string[]): IComponentTree => {
  const props = COMPONENT_MAP[componentName].properties?.reduce((pre, item) => {
    pre[item.key] = item.defaultValue
    return pre
  }, {} as IComponentProps)
  return {
    componentName,
    props,
    id: generateUUID(),
    parentIds,
    children: []
  }
}