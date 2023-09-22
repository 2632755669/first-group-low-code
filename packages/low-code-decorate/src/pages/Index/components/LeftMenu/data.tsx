import { EditOutlined, CodepenOutlined } from '@ant-design/icons';
import { ComponentNameEnum } from '@/componentConfig/enum'

interface ComponentOption  {
  label: string;
  key: string;
  type?: 'group';
  icon?: React.ReactNode;
  children?: ComponentOption[];
}

export const componentOptions: ComponentOption[] = [
  {
    label: '基本',
    key: 'base',
    type: 'group',
    icon: <CodepenOutlined />,
    children: [
      {
        label: '静态文本',
        key: ComponentNameEnum.Text,
      },
    ]
  },
  {
    label: '容器',
    key: 'container',
    type: 'group',
    icon: <EditOutlined />,
    children: [
      {
        label: 'flex布局',
        key: ComponentNameEnum.DisplayContainer,
      },
      {
        label: 'grid布局',
        key: 'grid',
      },
      {
        label: 'absolute布局',
        key: 'absolute',
      },
      {
        label: 'static布局',
        key: 'static',
      },
      {
        label: 'fixed布局',
        key: 'fixed',
      },
      {
        label: 'sticky布局',
        key: 'sticky',
      },
    ]
  },
]