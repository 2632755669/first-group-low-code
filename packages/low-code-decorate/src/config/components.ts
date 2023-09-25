import { Text } from '../baseComponent'
import { DisplayContainer } from '../coreComponents'
import { IComponentData, IStaticTextSettingsForm } from '@/types'

export const cssConfig = {

}

export const StaticTextSettingsForm: IStaticTextSettingsForm = {
  title: '文本设置',
  properties: [
    {
      label: '文本文案',
      value: 'textVal',
      maxLength: 100,
      placeholder: '文本输入'
    }
  ]
}

export const staticTextConfig = {
  style: {},
  props: {

  }
}

export enum ComponentNameEnum  {
  Text = 'Text',
  DisplayContainer = 'DisplayContainer',
}

export const ALL_COMPONENTS: Record<ComponentNameEnum, IComponentData> = {
  [ComponentNameEnum.Text]: {
    title: '文本',
    component: Text,
    propertiesForm: StaticTextSettingsForm
  },
  [ComponentNameEnum.DisplayContainer]: {
    title: 'flex布局',
    component: DisplayContainer,
    propertiesForm: StaticTextSettingsForm
  },
}