import { Text } from '../baseComponent'
import { DisplayContainer } from '../coreComponents'
import { ComponentNameEnum } from './enum'

export const cssConfig = {

}

interface IStaticTextSettingsForm {
  title: string;
  properties: Array<{
    label: string;
    value: string;
    maxLength: number;
    placeholder: string;
  }>
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

export interface IComponentData {
  title: string;
  component: any
  propertiesForm: IStaticTextSettingsForm
}

export const components: Record<ComponentNameEnum, IComponentData> = {
  [ComponentNameEnum.Text]: {
    title: '文本',
    component: Text,
    propertiesForm: StaticTextSettingsForm
  },
  [ComponentNameEnum.DisplayContainer]: {
    title: '文本',
    component: DisplayContainer,
    propertiesForm: StaticTextSettingsForm
  },
}