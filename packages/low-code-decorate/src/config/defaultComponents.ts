import { Text } from '../baseComponent'
import { DisplayContainer } from '../coreComponents'
import { StaticTextSettingsForm } from './components'
import { IComponentComposeData } from '@/types'

export const defaultComponents: IComponentComposeData[] = [
  {
    title: 'flex布局',
    component: DisplayContainer,
    propertiesForm: StaticTextSettingsForm,
    id: '1',
    children: [
      {
        title: '文本',
        component: Text,
        propertiesForm: StaticTextSettingsForm,
        id: '1.1',
     },
      {
        title: '文本',
        component: Text,
        propertiesForm: StaticTextSettingsForm,
        id: '1.2',
     },
      {
        title: '文本',
        component: Text,
        propertiesForm: StaticTextSettingsForm,
        id: '1.3',
     },
    ]
  },
]