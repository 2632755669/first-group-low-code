import type { ComponentNameEnum } from '@/enums';
export interface FormItemInfo {
  // 表单title
  title: string;
  // 表单组件类型
  type: string;
  defaultValue: any;
  // 布局所占比例
  gridSpan?: number;
  // key
  key: string;
  // 输入组件属性
  property?: any;
  // 数据源
  dataSource?: any;
  validator?: any;
  formItemProps?: any;
  // 校验规则
  rules?: Array<{
    required: boolean;
    message: string;
  }>;
}

export interface IComponent {
  componentName: ComponentNameEnum;
  title: string;
  icon?: string;
  group?: string;
  properties: FormItemInfo[];
  [key: string]: any;
}

export type IComponentProps = Record<string, any>;

export type IComponentMap = Record<ComponentNameEnum, IComponent>;

export type IComponentInstanceMap = Record<ComponentNameEnum, React.FC<any>>;

export interface IComponentTree {
  componentName: ComponentNameEnum;
  props: IComponentProps;
  id: string;
  parentIds: string[] | null;
  children: IComponentTree[]
}

